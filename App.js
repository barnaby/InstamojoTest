import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

export default class App extends React.Component {
  render() {
    let uri = 'https://test.instamojo.com/@bmalet/3c018cb4e6354bcb8ebaa4f98e6836d5';
    return (
      <WebView source={{uri}} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
