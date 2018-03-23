import React, { Component } from 'react';
import { View, Text, Dimensions, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import { MapView } from 'expo';
import { connect } from 'react-redux';

import * as actions from '../actions';

class MapScreen extends Component {
  
  state = {
    mapLoaded: false,
    region: {
      longitude: -122,
      latitude: 37,
      latitudeDelta: 0.04,
      longitudeDelta:
        Dimensions.get("window").width / Dimensions.get("window").height * 0.04
    }
  }

  componentDidMount(){
    this.setState({ mapLoaded: true });
  }

  getLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(pos => {
       const currentCoords = {
        longitude: pos.coords.longitude,
        latitude: pos.coords.latitude
      };

      this.goToLocation(currentCoords);
    });
  }

  goToLocation = coords => {
    this.map.animateToRegion({
      ...this.state.region,
      longitude: coords.longitude,
      latitude: coords.latitude
    });
    this.setState(prevState => {
      return {
        region: {
          ...prevState.region,
          longitude: coords.longitude,
          latitude: coords.latitude
        }
      };
    });
  }

  onRegionChangeComplete = (region) => {
    this.setState({ region });
  }

  onButtonPress = () => {
    this.props.fetchJobs(this.state.region);
  }

  render() {
    if(!this.state.mapLoaded){
      return (
        <View style= {{ flex:1, justifyContent: 'center' }}>
          <ActivityIndicator size={ "large" }/>
        </View>
      );
    }
    return (
      <View style={{flex:1}}>
        <MapView
          style={{flex:1}}
          initialRegion={this.state.region}
          ref={ref => (this.map = ref)}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
        <View style={styles.buttonContainer}>
          <Button
            large
            title="Go to my location"
            icon={{ name: 'send'}}
            onPress={this.getLocationHandler}
            buttonStyle={{
              backgroundColor:"#E74C3C",
              height: 60,
              width: 160,
            }}
          />
          <Button
            large
            title="Search this area"
            icon={{ name: 'search' }}
            onPress={this.onButtonPress}
            buttonStyle={{
              backgroundColor:"#E74C3C",
              height: 60,
              width: 155,
            }}
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
    right: 0,
    flexDirection: 'row',
    flex: 1
  }
};

export default connect(null, actions)(MapScreen);
