import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const SLIDE_DATA = [  //when the use first uses the app, these are the screens that are gonna show up
	{ text: 'Welcome To Job App', color: '#03A9F4' },
	{ text: 'Use this to get a job', color: '#009688' },
	{ text: 'Set your location, then swipe away', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
	state = { token: null };  //starting out the token is null until recieving it via facebook

	async componentWillMount() {
		let token = await AsyncStorage.getItem('fb_token');  //a promise statement until we get the tkn from fb

		if (token) {
			this.props.navigation.navigate('map'); //when the token is true, the map screen will show
			// this.setState({ token });
		} else {
			this.setState({ token: false }) //otherwise the modal disappears
		}
	}

	onSlidesComplete = () => {
		this.props.navigation.navigate('auth'); //after user swipes the third slide and presses the icon
	}

	render() {
		if (_.isNull(this.state.token)){
			return <AppLoading />
		}
		return (
			<Slides data = {SLIDE_DATA} onComplete = {this.onSlidesComplete}/>
		);
	}
}

export default WelcomeScreen;