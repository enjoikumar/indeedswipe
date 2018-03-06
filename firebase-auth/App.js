import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';



export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyB4Qei31QmygAjD_008TLkwDVOL41vMeYY",
      authDomain: "one-time-password-91bee.firebaseapp.com",
      databaseURL: "https://one-time-password-91bee.firebaseio.com",
      projectId: "one-time-password-91bee",
      storageBucket: "one-time-password-91bee.appspot.com",
      messagingSenderId: "641510416427"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
