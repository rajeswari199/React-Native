import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

class Links extends React.Component {
    render() {
        return (
            <View>
                <Button title="TODO" onPress={() => this.props.navigation.navigate('Todo')} />
                <Button title="RAIN TERRACE" onPress={() => this.props.navigation.navigate('RainTerrace')} />
                <Button title="WEATHER" onPress={() => this.props.navigation.navigate('Weather')} />
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
        margin: 20
    },
});

export default Links
