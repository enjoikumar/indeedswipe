import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView} from 'expo';
import { Card, Button } from 'react-native-elements'
import Swipe from '../components/Swipe';
import * as actions from '../actions';

class DeckScreen extends Component { //job is rendered from the region location 
	renderCard(job) {
		const initialRegion = {
			longitude: job.longitude,
			latitude: job.latitude,
			latitudeDelta: 0.045,
			longitudeDelta: 0.02
		};

		return ( //renders the job title
			<Card title = {job.jobtitle}> 
				<View style={{ height: 300}}>
					<MapView
					scrollEnabled = {false}
					style = {{ flex: 1 }}
					cacheEnabled = {Platform.OS === 'android' ? true : false}
					initialRegion = {initialRegion}
					>
					</MapView>
				</View> 
				<View style = {styles.detailWrapper}>
					<Text>{job.company}</Text>
					<Text>{job.formattedRelativeTime}</Text>
				</View> 
				<Text> 
					{job.snippet.replace(/<b>/g, '').replace(/<\/b/g, '')} 
				</Text> 
			</Card>
		);
	}

	renderNoMoreCards() { //after the region is done searching for job, it will display this
		return(
			<Card title = "No More Jobs">
			</Card>
		)
	}

	render() {
		return ( 
			<View style={{ marginTop: 20 }}>
				<Swipe 
					data = {this.props.jobs}
					renderCard = {this.renderCard} //basically what is show
					renderNoMoreCards = {this.renderNoMoreCards} //when no more cards are rendered
					onSwipeRight = {job => this.props.likeJob(job)} //iniates liking the card
					keyProp = "jobkey"  //unique key is the jobkey
				/>
			</View>
		);
	}
}

const styles = {
	detailWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: 10
	}
}

function mapStateToProps({ jobs }) {
  return { jobs: jobs.results };
}

export default connect(mapStateToProps, actions)(DeckScreen);






