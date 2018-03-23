import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SettingsScreen extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text> Iam SettinsScreen </Text>
        <Text> Iam SettinsScreen </Text>
        <Text> Iam SettinsScreen </Text>
        <Text> Iam SettinsScreen </Text>
        <Text> Iam SettinsScreen </Text>
        <Text> Iam SettinsScreen </Text>
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
export default SettingsScreen;
