import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Card, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null,
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyApSCFhpNeutFQlabsuhlrgNiyPtXfBk14',
      authDomain: 'authentication-48a69.firebaseapp.com',
      databaseURL: 'https://authentication-48a69.firebaseio.com',
      projectId: 'authentication-48a69',
      storageBucket: 'authentication-48a69.appspot.com',
      messagingSenderId: '206929426023'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  renderContent() {
    const { loggedIn } = this.state;
    switch (loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />
      default:
        return <Spinner size="large" />
    }
  }
  render() {
    const { appStyle } = styles;
    return (
      <View style={appStyle}>
        <Header headerText="Authentication" />
        {this.renderContent()}
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
