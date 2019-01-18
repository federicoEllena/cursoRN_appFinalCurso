import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { emailChanged, passwordChanged } from './actions';
import {  Card, CardSection, Input, Button } from './common';


class LoginForm extends Component {
  handleEmailChange = text => this.props.changeEmail(text); //changeEmail es un action creator
  handlePasswordChange = text => this.props.changePassword(text); //changePassword es un action creator
  handleEmployeeList = () => Actions.main();

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeHolder="email@domain.com"
            onChangeText={this.handleEmailChange}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            enableSecureTextEntry
            label="Password"
            placeHolder="password"
            onChangeText={this.handlePasswordChange}
            value={this.props.password}
          />
        </CardSection>
        <CardSection>
          <Button whenPressed={this.handleEmployeeList}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  }
};

const mapDispatchToProps = dispatch => ({
  changeEmail: text => dispatch(emailChanged(text)),
  changePassword: text => dispatch(passwordChanged(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
/* connect(mapStateToProps, {actionCreatorABindear})(componente) */
