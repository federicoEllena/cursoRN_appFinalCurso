import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import LoginForm from './LoginForm';

class App extends Component {
  render() {
    return(
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;

/*const MyComponent = ({ children }) => (
  <View style={{
    backgroundColor: '#bf04ac',
    height: 120,
    width: 120
  }}>{children}</View>
)*/

/*class App extends Component {
  render() {
    return(
      <Provider store={store}>
       
        <MyComponent>
          <Text>Cuadrado Violeta</Text>
          <Text>Cuadrado Violeta</Text>
          <Text>Cuadrado Violeta</Text>
        </MyComponent>
      </Provider>
    );   
  }
} */