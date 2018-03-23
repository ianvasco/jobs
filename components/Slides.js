import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1){
      return (
        <Button
          containerViewStyle={styles.button}
          title="Proceed"
          raised
          buttonStyle={{
            backgroundColor:"#EAEDED",
            borderColor: "#AED6F1",
          }}
          color="rgba(0,0,0)"
          onPress={this.props.onComplete}
        />
      );
    }
  };

  renderSlides = () => {
    return this.props.data.map((slide, index) => {
      return (
        <View key={slide.text} style={[styles.slide, { backgroundColor: slide.color }]}>
          <Text style={styles.slideText}>{slide.text}</Text>
          {this.renderLastSlide(index)}
        </View>
      );
    });
  }

  render(){
    return (
      <ScrollView
        horizontal
        pagingEnabled
        style={{ flex: 1 }}
      >
      {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH
  },
  slideText: {
    fontSize: 30,
    textAlign: 'center'
  },
  button: {
    marginTop: 30,
  }
};
export default Slides;
