import React from 'react';
import TodoList from './todo-list';
import TodoForm from './todo-form';
import { StyleSheet, View, Text, FlatList, TouchableNativeFeedback, TouchableOpacity, TouchableHighlight } from 'react-native';

class Todo extends React.Component {
    render = () => {
        return (
            <View style={styles.container}>
                <TodoForm />
                <TodoList />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        justifyContent: 'center',
        margin: 20
    }
})

export default Todo;
