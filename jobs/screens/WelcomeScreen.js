import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const SLIDE_DATA = [
	{ text: 'Welcome To Job App', color: '#03A9F4' },
	{ text: 'Use this to get a job', color: '#009688' },
	{ text: 'Set your location, then swipe away', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
	state = { token: null };

	onSlidesComplete = () => {
		this.props.navigation.navigate('auth');
	}

	async componentWillMount() {
		let token = await AsyncStorage.getItem('fb_token');

		this.setState = ({ token });
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