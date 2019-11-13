import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoForm from './components/todo-form'
import TodoList from './components/todo-list'
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TodoForm />
          <TodoList />
        </View>
      </Provider>
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

export default App;