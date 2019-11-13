import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux'

class TodoList extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.todolist}
                    renderItem={({ item }) => <View style={styles.item}>
                        <Text style={styles.title}>{item.task}</Text>
                    </View>}
                    keyExtractor={(item, index) => item + index}
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
    item: {
        alignItems: 'stretch'
    },
    title: {
        fontSize: 25,
    },
});
const mapProps = (storeData) => ({ todolist: storeData.TodoList });
export default connect(mapProps)(TodoList);
