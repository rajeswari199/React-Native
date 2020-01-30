import * as _ from 'lodash'
import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';

const imageObject = {
    cloud: require('../../images/cloud.png'),
    rain: require('../../images/rain.png'),
    snow: require('../../images/snow.png'),
    drizzle: require('../../images/drizzle.png'),
    strom: require('../../images/strom.png')
};

const Cards = (props) => {
    return (
        <View style={styles.innerView}>
            {props.data.map((item, index) => {
                return <View style={styles.data} key={index}>
                    <Text style={styles.text}>{_.get(item, 'name', '')}</Text>
                    <Image
                        style={styles.icons}
                        source={props.data.length > 0 ? imageObject[`${_.get(item, 'weather[0].description', '').match(/snow|rain|cloud|strom|drizzle/g)}`] : require('../../images/cloud.png')}
                    />
                    <Text style={styles.text}>{_.get(item, 'weather[0].description', '')}</Text>
                </View>
            })
            }</View>
    )
}

const styles = StyleSheet.create({
    data: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    innerView: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,128,0.4)',
        justifyContent: 'space-around'
    },
    text: {
        color: "black"
    }
});

export default Cards;