import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import t from 'tcomb-form-native'

import PersonModel from './src/forms/model/RegisterModel'

var Form = t.form.Form

var options = {
  auto : 'placeholders'
}

export default class App extends React.Component {

  constructor (props) {
    super(props)
    this.onPress = this.onPress.bind(this)
  }

  onPress () {
    var value = this.refs.form.getValue();
    if (value) {
      console.warn(value)
      t.clear
    }
  }

  componentDidMount() {
    SplashScreen.hide()
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color : 'black', fontSize: 26}}>Registrate</Text>

        <View style={styles.formContent}>
          <Form
            ref="form"
            type={PersonModel}
            options = {options}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection : 'column',
    backgroundColor: '#fff',
    justifyContent : 'space-around',
    alignItems : 'center'
  },

  formContent : {
    width : '93%',
  },

  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },

  button: {
    elevation : 5,
    width : '50%',
    height: 36,
    backgroundColor: '#009688',
    borderRadius: 2,
    marginBottom: 10,
    justifyContent: 'center'
  }
});
