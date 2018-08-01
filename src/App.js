import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyApSCFhpNeutFQlabsuhlrgNiyPtXfBk14',
      authDomain: 'authentication-48a69.firebaseapp.com',
      databaseURL: 'https://authentication-48a69.firebaseio.com',
      projectId: 'authentication-48a69',
      storageBucket: 'authentication-48a69.appspot.com',
      messagingSenderId: '206929426023'
    });
  }
  render() {
    const { appStyle } = styles;
    return (
      <View style={appStyle}>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

const styles = {
  appStyle: {
    // display: 'flex',
  }
}

export default App;
