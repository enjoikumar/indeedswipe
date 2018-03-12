import _ from 'lodash';
import {
	LIKE_JOB,
	CLEAR_LIKED_JOBS
} from '../actions/types';

export default function(state = [], action) { 
	switch (action.type) {
		case CLEAR_LIKED_JOBS:
		return [];
		case LIKE_JOB:
			return _.uniqBy([
					action.payload, ...state
				], 'jobkey');
		default:
			return state;
	}
}




//make a new array and iterate over each key to make sure there are no duplicate jobs
//the state is an empty array when the user likes the job, that payload(job) will be pushed into that array
//Clear liked jobs, basically resets the state by making that array empty