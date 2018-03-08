import { FACEBOOK_LOGIN_SUCCESS} from '../actions/types';
import { FACEBOOK_LOGIN_FAIL } from '../actions/types';


export default function(state = {}, action) {
	switch (action.type) {
		case FACEBOOK_LOGIN_SUCCESS:
			return { token: action.payload };
		case FACEBOOK_LOGIN_FAIL:
			return { token: null };
		default:
			return state;
	}
}


//recording token inside of reducer