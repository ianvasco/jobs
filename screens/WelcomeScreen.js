import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import Slides from '../components/Slides';
import { AppLoading } from 'expo';

const SLIDE_DATA = [
  { text: 'Welcome to Jobit', color: '#D6EAF8' },
  { text: 'Log in with your Facebook account', color: '#EBF5FB'},
  { text: 'Set your location', color: '#D6EAF8' },
  { text: 'Finally, swipe right to save your job!', color: '#EBF5FB'}
];

class WelcomeScreen extends Component {
  state = { token: null };

  async componentWillMount(){
    let token = await AsyncStorage.getItem('fb_token');
    AsyncStorage.removeItem('fb_token');

    if (token){
      this.props.navigation.navigate('map');
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render(){
    if (_.isNull(this.state.token)){
      return <AppLoading />;
    }
    return(
        <Slides
          data={SLIDE_DATA}
          onComplete={this.onSlidesComplete}
        />
    );
  }
}
export default WelcomeScreen;
