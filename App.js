/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import VideoPlayer from 'react-native-video-controls';

export default class App extends Component {
  componentWillMount(){
    console.log("show me akash");
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Not SUCK </Text>
        <VideoPlayer
            source = {{ uri: 'https://mangaa.in/media/videos/Shin_Chan_Hand_Wash_Comedy_In_Tamil_WhatsApp_status_Shin_Chan_new_2017_-_YouTube.MP4' }}
            onError = {this.videoError}
            // progressUpdateInterval = {250.0}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
