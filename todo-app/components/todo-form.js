import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux'

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ''
    }
  }
  onpress = () => {
    this.props.add(this.state.task);
    this.setState({ task: '' })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.task}
          placeholder="Add Task"
          returnKeyLabel={"next"}
          onChangeText={(text) => this.setState({ task: text })}
        />
        <Button onPress={this.onpress}
          title="Add-Task"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

const dispatch = (dispatch) => ({
  add: (data) => { dispatch({ task: data, type: 'newTask' }) }
});

export default connect(null, dispatch)(TodoForm)
