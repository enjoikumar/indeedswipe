import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo'; 

import {
	FACEBOOK_LOGIN_SUCCESS,
	FACEBOOK_LOGIN_FAIL
} from './types';





export const facebookLogin = () => async dispatch => {  //facebook login component
	let token = await AsyncStorage.getItem('fb_token');

	if (token) {
		//Dispatch an action sayingFB login is done
		dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
	} else {
		//Start up FB login process
		doFacebookLogin(dispatch);
	}
}

const doFacebookLogin = async dispatch => {
	let { type, token } = await Facebook.logInWithReadPermissionsAsync('1667680913289362', { //calling the facebook api
		permissions: ['public_profile']
	});

	if (type === 'cancel') {
		return dispatch({ type: FACEBOOK_LOGIN_FAIL}); //iniates facebook faile
	}

	await AsyncStorage.setItem('fb_token', token);
	dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};

