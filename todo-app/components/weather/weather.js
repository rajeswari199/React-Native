import React from 'react';
import * as _ from 'lodash';
import Cards from './card';
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';

class Weather extends React.Component {
    constructor() {
        super();
        this.imageObject = {
            cloud: require('../../images/cloud.png'),
            rain: require('../../images/rain.png'),
            snow: require('../../images/snow.png'),
            drizzle: require('../../images/drizzle.png'),
            strom: require('../../images/strom.png')
        }
        this.state = {
            weather: {
                list: []
            }
        }
    }

    componentDidMount() {
        this.onpress();
    }

    onpress = async () => {
        const response = await fetch("http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743,2172797&units=metric&appid=16251f7122ebfee82455ad435fa46da3", {
            "method": "GET"
        })
        this.setState({
            weather: await response.json(),
        });
    }

    render() {
        return (
            <View style={styles.background}>
                <ImageBackground source={require('../../images/clouds.jpg')} style={styles.image} >
                    <Cards data={this.state.weather.list} />
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
    },
    image: {
        flex: 1
    },
    icons: {
        // justifyContent: 'center',
    },
    data: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        // textAlign: 'auto'
    },
    innerView: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,128,0.4)',
        // alignItems: 'stretch',
        // alignContent: 'stretch',
        justifyContent: 'space-around'
    },
    text: {
        // fontWeight: 'bold',
        color: "black"
    }
});

export default Weather;
