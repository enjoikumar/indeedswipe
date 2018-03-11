import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component { //going to look at our props object and if theres a token, it will navigate to the map screen
	componentDidMount() {
		this.props.facebookLogin();
		// AsyncStorage.removeItem('fb_token')  this will remove the token so user will have to login
		this.onAuthComplete(this.props);
	}

	componentWillReceiveProps(nextProps) {
	this.onAuthComplete(nextProps)
	};

	onAuthComplete(props) {
		if (props.token) {
			this.props.navigation.navigate('map'); //if there is a token it will render the map screen
		}
	}

	render() { // dummy screen will change to an error page or try to redirect the user to autscreen
		return (
			<View> 
				<Text>AuthScreen</Text>
				<Text>AuthScreen</Text>
				<Text>AuthScreen</Text>
				<Text>AuthScreen</Text>
				<Text>AuthScreen</Text>
				<Text>AuthScreen</Text>
			</View>
		);
	}
}

function mapStateToProps({ auth }){
	return { token: auth.token };
}

export default connect(mapStateToProps, actions)(AuthScreen);


//AuthScreen = when the AuthScreen is about to be rendered 
//we want to send the user to the facebook login flow
//we'll attempt the user to login
//if there is a token already saved, we will dispatch
//an action which will update the Auth piece of state
//through the authreducer
//when we update the state, redux rerenders new props on
//every page/screen