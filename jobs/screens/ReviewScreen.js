import React, { Component } from 'react';
import { View, Text, Platform, ScrollView, Linking } from 'react-native';
import { navigation, screenProps } from 'react-navigation';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { MapView } from 'expo';


class ReviewScreen extends Component {  //review screen where liked jobs by the user are stored
	static navigationOptions = ({ navigation }) => {
	 	return {
     title: 'Review Jobs', //just the title and 
     headerRight: (
       <Button 
         title='Settings' 
         onPress={ () => navigation.navigate('settings')} 
         backgroundColor = "rgba(0, 0, 0, 0)"
         color = "rgba(0, 122, 255, 1)"
       />
        ),
     style: {
	     	marginTop: Platform.OS === 'android' ? 24 : 0  //if its android the margintop is 24
	   }
	 };
 }

 renderLikedJobs() { //the liked jobs will show a map, the time the job has since been posted and a url
  return this.props.likedJobs.map(job => {
    const { company, formattedRelativeTime, url, longitude, latitude, jobkey, jobtitle } = job;
    const initialRegion = {
      longitude,
      latitude,
      longitudeDelta: 0.02,
      latitudeDelta: 0.045
    };

    return(
      <Card title={jobtitle} key={jobkey}>
        <View style={{ height: 200}}>
          <MapView 
          style={{ flex: 1 }}
          cacheEnabled={Platform.OS === 'android'} 
          scrollEnabled={false}
          initialRegion={initialRegion}
        />
          <View style={styles.detailWrapper}>
            <Text style={styles.italics}>{company}</Text>
            <Text style={styles.italics}>{formattedRelativeTime}</Text>       
          </View>
          <Button
            title="Apply Now!"
            backgroundColor="#03A9F4"
            onPress={() => Linking.openURL(url)}  //onPress opens the job on browser
          />
        </View>
      </Card>
    );
  });
 }

	render () {
    return (
      <ScrollView>
        {this.renderLikedJobs()}
      </ScrollView>
    );
  }
}

const styles = {
  italics: {
    fontStyle: 'italic'
  },
  detailWrapper: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
  
}

function mapStateToProps(state) {  //the state where the liked jobs are coming in
  return { likedJobs: state.likedJobs };
}

export default connect(mapStateToProps)(ReviewScreen);



  // static navigationOptions = ({navigation, screenProps}) => {
  //  return ({
  //    title: 'Review Jobs',
  //    headerRight: <Button title = "Settings" onPress={ () =>} />
  //  });
  // }

