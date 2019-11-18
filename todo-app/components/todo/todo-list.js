import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: []
        }
    }
    onLongPress = (index) => {
        this.setState({
            selected: [...this.state.selected, index]
        }, () => { console.log('yes'); this.render() })
    }
    render = () => {
        return (
            <View style={styles.container}>
                <Text>yeah</Text>
                <FlatList
                    data={this.props.todolist}
                    renderItem={({ item, index }) => <View style={styles.item}>
                        <TouchableOpacity onLongPress={() => this.onLongPress(index)}>
                            <Text>{item.task}adcad</Text>
                        </TouchableOpacity>
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
        justifyContent: 'center',
        margin: 10
    },
    item: {
        flex: 1,
        alignSelf: 'flex-start'
    },
    card: {
        flex: 1,
        backgroundColor: '#00FF00'

    },
    selected: {
        margin: 10,
        fontSize: 20,
        backgroundColor: '#fff'
    },
    title: {
        margin: 10,
        fontSize: 20,
        backgroundColor: '#642459'
    },
});
const mapProps = (storeData) => ({ todolist: console.log(storeData.TodoList) });
export default connect(mapProps)(TodoList);
