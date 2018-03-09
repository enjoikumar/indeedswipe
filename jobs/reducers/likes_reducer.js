import _ from 'lodash';
import{
	LIKE_JOB
} from '../actions/types';

export default function(state, action) { 
	switch (action.type) {
		case LIKE_JOB;
			return _.uniqBy([
				action.payload, ...state. //make a new array and iterate over each key to make sure there are no duplicate jobs
				], 'jobkey')
		default:
			return state;
	}
}