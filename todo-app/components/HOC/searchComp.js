import React from 'react';
import { TextInput, View } from 'react-native';
import { Button } from 'react-native-paper';

const searchComponent = (WrappedComponent) => {

    return class commonUsage extends React.Component {
        static navigationOptions = {
            headerShown: false
        };

        state = {
            searchText: ''
        }

        onChange = (text) => {
            console.log(this.props);
            this.setState((prevState) => ({ list: prevState.list, searchText: text }))
        }

        searchBox =
            <View>
                <TextInput
                    defaultValue={this.state.searchText}
                    placeholder="Enter Value"
                    returnKeyLabel={"next"}
                    onChangeText={this.onChange}
                />
            </View>


        render() {
            return <WrappedComponent
                {...this.props}
                onpress={this.onpress}
                filteredList={this.state.list}
                searchBox={this.searchBox}
                searchText={this.state.searchText}
            />
        }

    }
}

export default searchComponent
