import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ListView } from 'react-native';
import * as _ from 'lodash'
import searchComponent from './searchComp';

class HOC extends React.Component {
    constructor(props) {
        super(props);
        this.state = { list: ['apple', 'ball', 'skype', 'instagram', 'facebook', 'whatsapp', 'snapchat', 'tinder'] }
    }


    onpress = () => {
        console.log(this.state.list, this.props.searchText);
        let list = this.state.list;
        list = list.filter((ele) => ele.match(new RegExp(`${this.props.searchText.toLowerCase()}`)));
        this.setState({
            list: list
        }, () => console.log(this.state.list))
    }

    render() {
        return (
            <View style={styles.layout}>
                {this.props.searchBox}
                <Button
                    title="Search"
                    onPress={this.onpress}
                />
                {this.state.list.map(ele => <Text>{ele}</Text>)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '90%',
        width: '90%'
    }
});

export default searchComponent(HOC)
