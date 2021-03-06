import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as _ from 'lodash'

class RainTerrace extends React.Component {
    constructor() {
        super();
        this.state = { alterArray: [], array: '' }
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            alterArray: this.state.array.split(',').map(Number)
        }, () => this.calculation())
    };

    calculation = () => {
        const arrLen = this.state.alterArray.length;
        const arr = [];
        const temp = [{ green: this.state.alterArray[0] }];
        this.state.alterArray.map((blocks, position) => {
            if (position > 0 && position + 1 < arrLen) {
                const start = position > 1 ? _.max(_.slice(this.state.alterArray, 0, position)) : this.state.alterArray[0];
                const stop = _.max(_.slice(this.state.alterArray, position + 1, arrLen));
                const val = _.min([start, stop]) - blocks;
                if (val > 0) {
                    arr.push(val)
                    temp.push({ green: blocks, blue: val })
                } else {
                    console.log(`green alone`)
                    temp.push({ green: blocks })
                }
            }
        })
        this.setState({ water: _.sum(arr) });
        this.setState({ alterArray: [...temp, { green: this.state.alterArray[arrLen - 1] }] }, () =>
            console.log(this.state.alterArray)
        )

    }

    onChange = (event) => {
        this.setState({ array: event.target.value })
    }

    render() {
        return (
            <View style={styles.layout}>
                <View style={styles.container}>
                    <View style={styles.blocks}>
                        {
                            this.state.alterArray.map((height, index) =>
                                <View style={styles.block} keyExtractor={(item, index) => `${index.toString()}derjk`}>
                                    {_.times(_.sum([height.blue, height.green]), (item, index) => index + 1).map((item, index) =>
                                        <View keyExtractor={(item, index) => index.toString()}>
                                            {/* <Text>{index}</Text> */}
                                            <View style={index + 1 <= height.blue ? styles.water : styles.square}></View>
                                        </View>
                                    )
                                    }
                                </View>
                            )
                        }
                    </View>
                    <View style={styles.operations}>
                        <Text>BUILDING BLOCKS PROBLEM</Text>
                        <Text>CAPACITY = {this.state.water}l</Text>
                        <TextInput
                            value={this.state.array}
                            placeholder="Enter Value"
                            returnKeyLabel={"next"}
                            onChangeText={(text) => this.setState({ array: text })}
                        />
                        <Button onPress={this.onSubmit}
                            title="Submit"
                            color="#841584"
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        alignItems: 'center',
        height: '90%',
        width: '90%'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: '80%',
        width: '80%'
    },
    square: {
        height: 80,
        backgroundColor: 'green',
        borderColor: 'black',
        borderWidth: 5,
    },
    water: {
        height: 80,
        backgroundColor: 'blue',
    },
    block: {
        flexShrink: 1,
        flex: 1,
        flexDirection: 'column',
        borderColor: 'black',
        borderWidth: 5,
    },
    operations: {
        flex: 1
    },
    blocks: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'flex-end'
    }
});

export default RainTerrace
