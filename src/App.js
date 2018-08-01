import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      
    });

    firebase.auth().onAuthStateChanged((user) => {

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
