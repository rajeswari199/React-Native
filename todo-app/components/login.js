import React from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, TextInput } from 'react-native';

class Login extends React.Component {
    static navigationOptions = {
        headerShown: false
    };
    constructor() {
        super();
        this.state = {
            email: ''
        }
    }

    onpress = () => {
        alert('huraaayyyy!!!!!')
        this.setState({ task: '' })
    }

    render() {
        return (
            <View style={styles.background}>
                <ImageBackground source={require('../images/laptop2.jpg')} style={styles.image} >
                    <View style={styles.container}>
                        <View
                            style={styles.textInput}>
                            <TextInput
                                style={styles.text}
                                value={this.state.email}
                                placeholder="Email"
                                placeholderTextColor="#fff"
                                returnKeyLabel={"next"}
                                onChangeText={(text) => this.setState({ email: text })}
                            />
                        </View>
                        <View
                            style={styles.textInput}>
                            <TextInput
                                style={styles.text}
                                value={this.state.password}
                                placeholder="Password"
                                returnKeyLabel={"next"}
                                onChangeText={(text) => this.setState({ password: text })}
                            />
                        </View>
                        <TouchableOpacity onPress={() => {
                            alert(this.state.email + ' loggedIn');
                            this.props.navigation.navigate('Links');
                        }} disabled={this.state.email === ''} >
                            <View style={styles.button}>
                                <Text style={styles.text}>Login</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.view}>
                            <View>
                                <Text style={styles.text}>Forgot Password?</Text>
                            </View>
                            <View>
                                <Text style={styles.text}>SIGN UP</Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        justifyContent: 'center',
        margin: 20
    },
    background: {
        backgroundColor: 'mediumblue',
        width: '100%',
        height: '100%',
        opacity: .8
    },
    button: {
        width: 350,
        height: 50,
        margin: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: .7,
        backgroundColor: "#fff"
    },
    image: {
        opacity: .8,
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    textInput: {
        width: 350,
        height: 50,
        margin: 20,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        opacity: .35,
        color: "#fff",
        backgroundColor: 'mediumblue',
    },
    text: {
        color: "#fff"
    },
    view: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 20,
        justifyContent: 'space-between'
    }
});

export default Login
