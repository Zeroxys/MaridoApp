import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

export default class App extends React.Component {

  componentDidMount() {
    SplashScreen.hide()
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>asdasdsad</Text>
      </View>
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
