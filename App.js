import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import t from 'tcomb-form-native'

import PersonModel from './src/forms/model/RegisterModel'

const Form = t.form.Form
const stylesheet = {...Form.stylesheet}

stylesheet.textbox.normal.borderWidth = 0;
stylesheet.textbox.error.borderWidth = 0;
stylesheet.textbox.normal.marginBottom = 0;
stylesheet.textbox.error.marginBottom = 0;

stylesheet.textboxView.normal.borderColor = 'lightgrey';
stylesheet.textboxView.normal.borderWidth = 0;
stylesheet.textboxView.error.borderWidth = 0;
stylesheet.textboxView.normal.borderRadius = 0;
stylesheet.textboxView.error.borderRadius = 0;
stylesheet.textboxView.normal.borderBottomWidth = 2;
stylesheet.textboxView.error.borderBottomWidth = 2;
stylesheet.textboxView.error.borderColor = 'red';
stylesheet.textbox.normal.marginBottom = 5;
stylesheet.textbox.error.marginBottom = 5;

console.warn(stylesheet)

var options = {
  auto : 'placeholders',
  stylesheet : stylesheet,
  fields : {
    name : {
      maxLength: 70,
      minLength : 6,
      autoCapitalize: 'none',
      placeholder : 'Nombre',
      underlineColorAndroid: 'transparent',
      error: 'Must have 6-12 characters with at least 1 number and 1 special character'
    },

    email : {
      keyboardType: 'email-address',
      autoCapitalize: 'none',
      autoCorrect: false,
      error: 'Must have 6-12 characters with at least 1 number and 1 special character'
    },  

    phone  : {
      keyboardType: 'phone-pad',
      autoCapitalize: 'none',
      autoCorrect: false,
      error: 'Must have 6-12 characters with at least 1 number and 1 special character'
    },

    home : {
      keyboardType: 'default',
      autoCapitalize: 'none',
      autoCorrect: false,
      error: 'Must have 6-12 characters with at least 1 number and 1 special character'
    },

    password : {
      placeholder : 'password',
      autoCapitalize: 'none',
      secureTextEntry: true,
      error: 'Must have 6-12 characters with at least 1 number and 1 special character'
    }
  }
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
