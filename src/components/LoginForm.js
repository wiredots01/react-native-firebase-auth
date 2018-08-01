import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner} from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true});
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.onLoginSuccess();
      })
      .catch(() =>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(()=> {
            this.onLoginSuccess();
          })
          .catch(()=> {
            this.onLoginFail();
          });
      });
  }

  onLoginFail = () => {
    this.setState({
      loading: false,
      error: 'Authentication failed!',
    });
  }

  onLoginSuccess = () => {
    this.setState({
      loading: false,
      email: '',
      password: '',
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    const { email, password, error, loading } = this.state;

    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@email.com"
            label="Email"
            value={email}
            onChangeText={email => this.setState({ email: email })}
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder="password"
            label="Password"
            value={password}
            onChangeText={password => this.setState({ password })}
            secureTextEntry
          />
        </CardSection>
        <Text style={styles.errorStyle}>
          {error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  }
}
export default LoginForm;