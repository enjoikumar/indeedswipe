import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import { Button, Icon } from 'react-native-elements';

import * as actions from '../actions';

class MapScreen extends Component {  //the map will not be shown until the map is loaded
  static navigationOptions = {
    title: 'Map',
    tabBarIcon:({ tintColor }) => {
      return <Icon name="my-location" size={30} color={tintColor}/>
    }
  }

  state = {
    mapLoaded: false,
    region: {
      "latitude": 40.80330997024359,
      "latitudeDelta": 0.5482394756968034,
      "longitude": -73.85496856041367,
      "longitudeDelta": 0.454181483722536,
    }
  }

  componentDidMount() {
    this.setState({ mapLoaded: true });  //the map will be shown
  }

  onRegionChangeComplete = (region) => {  //when the user is done changing the map location the region changes
    this.setState({ region }); 
  }

  onButtonPress = () => {
    this.props.fetchJobs(this.state.region, () => {  //onpress the indeed api gets front end dev jobs in that area
      this.props.navigation.navigate('deck');
    });
  }

  render() {
    if (!this.state.mapLoaded) { //when map is true render this
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <MapView
          region={this.state.region}
          style={{ flex: 1 }}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
        <View style={styles.buttonContainer}>
          <Button
            large
            title="Search This Area"
            backgroundColor="#009688"
            icon={{ name: 'search' }}
            onPress={this.onButtonPress}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0
  }
}

export default connect(null, actions)(MapScreen);


// Nyc map region
// Object {
//   "latitude": 40.80330997024359,
//   "latitudeDelta": 0.5482394756968034,
//   "longitude": -73.85496856041367,
//   "longitudeDelta": 0.454181483722536,
// }



//FOR INDEED APIß

// http://api.indeed.com/ads/apisearch?publisher=4201738803816157&q=java&l=austin&v=2

// Key things to include is:
// publisher=4201738803816157     AND
// v=2



