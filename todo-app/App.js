import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
// import TodoForm from './components/todo-form'
// import TodoList from './components/todo-list'
import RainTerrace from './components/rain-terrace'
import { Provider } from 'react-redux';
import store from './store';
import Navigation from './navigator'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RainTerrace />
      </Provider >
    );
  }
}

export default App;