import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';
import {
  FETCH_JOBS,
  LIKE_JOB,
  CLEAR_LIKED_JOBS
} from './types';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?'; //the api parameters
const JOB_QUERY_PARAMS = {
  publisher: '4201738803816157', //api key
  format: 'json',
  v: '2',
  latlong: 1,
  radius: 10,
  q: 'front end developer' //the search query, Maybe make user based query
};

const buildJobsUrl = (zip) => {
  const query = qs.stringify({...JOB_QUERY_PARAMS, l: zip }); //compiles the api 
  return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = (region, callback) => async (dispatch) => { //fetches the job in the region
  try {
    let zip = await reverseGeocode(region); //turns the lat/lng to a zip
    const url = buildJobsUrl(zip);
    let { data } = await axios.get(url); //get that list of jobs and return a respond jobs data
    dispatch({ type: FETCH_JOBS, payload: data });
    callback();
    console.log(data) //able to see the job data on the console
  } catch(e) {
    console.error(e);
  }
};

export const likeJob = (job) => {
  return {
    payload: job,
    type: LIKE_JOB
  };
};

export const clearLikedJobs = () => {
 return { type: CLEAR_LIKED_JOBS };
}