import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Review Jobs',
    headerRight:
    <Button
      title="Settings"
      onPress={() => { navigation.navigate('settings') }}
      backgroundColor="rgba(0,0,0,0)"
      color="rgba(0,122,255,1)"
    />,
    headerTitleStyle: {
      marginTop: Platform.OS === 'android' ? 24 : 0
    }
})
  render(){
    return(
      <View style={styles.container}>
        <Text> Iam ReviewScreen </Text>
        <Text> Iam ReviewScreen </Text>
        <Text> Iam ReviewScreen </Text>
        <Text> Iam ReviewScreen </Text>
        <Text> Iam ReviewScreen </Text>
        <Text> Iam ReviewScreen </Text>
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
};

export default ReviewScreen;
