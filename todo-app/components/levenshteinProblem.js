import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ListView } from 'react-native';
import * as _ from 'lodash'

class Levenshtein extends React.Component {
    constructor() {
        super();
        this.state = { levenshteinArray: [], name1: '', name2: '', path: [] }
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            name1Array: Array.from(_.toLower(this.state.name1)),
            name2Array: Array.from(_.toLower(this.state.name2))
        }, () => this.calculation())
    };

    calculation = () => {
        const name1 = this.state.name1Array;
        const name2 = this.state.name2Array;
        const levenshteinArray = [];
        let k = 1;
        for (i = 0; i < name1.length + 1; i++) {
            levenshteinArray[i] = [];
            for (j = 0; j < name2.length + 1; j++) {
                if (i === 0 || j === 0) {
                    i === 0 ? levenshteinArray[i].push({ item: j, key: k }) : levenshteinArray[i].push({ item: i, key: k });
                } else {
                    const add = name1[i - 1] === name2[j - 1] ? 0 : 1;
                    levenshteinArray[i].push({ item: _.min([(levenshteinArray[i - 1][j].item + 1), (levenshteinArray[i][j - 1].item + 1), (levenshteinArray[i - 1][j - 1].item + add)]), key: k });
                }
                k++;
            }
        }
        this.setState({
            name1Array: name1,
            name2Array: name2,
            levenshteinArray: levenshteinArray
        }, () => this.calculatePath());
    }

    calculatePath = () => {
        const path = [...this.state.levenshteinArray];
        console.log('path',path);
        let i = path.length - 1;
        let array = path[i];
        while (i > 0) {
            j = array.length - 1;
            let min = path[i][j];
            let cell = { i: i, j: j, operation: 'no' }
            while (j > 0) {
                min = _.min([path[i - 1][j].item, path[i][j - 1].item, path[i - 1][j - 1].item]);
                if (min !== path[i][j]) {
                    cell = min === path[i - 1][j].item ? { i: i - 1, j: j, operation: 'del' } : min === path[i - 1][j - 1].item ? { i: i - 1, j: j - 1, operation: 'sub' } : { i: i, j: j - 1, operation: 'in' };
                    i = cell.i;
                    j = cell.j;
                }
                path[cell.i][cell.j]['operation'] = cell.operation;
            }
        }
        console.log(path);
        this.setState((previous) => ({
            levenshteinArray: path,
            name1: previous.name1,
            name1Array: previous.name1Array,
            name2: previous.name2,
            name2Array: previous.name2Array
        }), () => console.log(this.state))
    }

    render() {
        console.log(this.state.levenshteinArray.length > 0 ? this.state.levenshteinArray : [])
        return (
            <View style={styles.layout}>
                <View style={styles.container}>
                    <View style={styles.operations}>
                        <Text style={{ color: 'black' }}>BUILDING BLOCKS PROBLEM</Text>
                        <Text style={{ color: 'black' }}>LEVENSHTEIN'S DISTANCE = {this.state.levenshteinArray.length > 0 ? this.state.levenshteinArray[this.state.name1Array.length][this.state.name2Array.length].item : 0}</Text>
                        <TextInput
                            value={this.state.name1}
                            placeholder="Enter Value"
                            returnKeyLabel={"next"}
                            onChangeText={(text) => this.setState({ name1: text })}
                        />
                        <TextInput
                            value={this.state.name2}
                            placeholder="Enter Value"
                            returnKeyLabel={"next"}
                            onChangeText={(text) => this.setState({ name2: text })}
                        />
                        <Button onPress={this.onSubmit}
                            title="Submit"
                            color="#841584"
                        />
                    </View>
                    {
                        this.state.levenshteinArray.length > 0 &&
                        <View style={styles.operations}>
                            {this.state.levenshteinArray.map((row, index) =>
                                <View key={`${index}element`} style={{ flexShrink: 1, flex: 1, flexDirection: 'row' }}>
                                    {row.map(element =>
                                        <View key={`${element.key}view`} style={{ backgroundColor: element.operation && element.operation !== 'no' ? 'red' : 'green', flexShrink: 1, flex: 1, borderColor: 'black', borderWidth: 0.5, alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
                                            <Text style={{ color: 'black' }}>{element.item}</Text>
                                        </View>
                                    )}
                                </View>
                            )}
                        </View>
                    }
                </View>
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
    },
    container: {
        flex: 1,
        justifyContent: 'space-around',
        height: '80%',
        width: '80%'
    },
    operations: {
        flex: 1,
        justifyContent: 'flex-start'
    }
});

export default Levenshtein
