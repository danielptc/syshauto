import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Child from './Child.js';

export default class Parent extends Component {
    constructor(result) {
        super();
        this.state = {
            result: this.setState({result})
        };
    }

    getResponse(result){
        this.setState({result});

        this.props.navigation.navigate('RecebendoComponente')
    }

    render(){
        return (
            <View>
                <Text>{this.state.result}</Text>
                <Child num={2} callback={this.getResponse.bind(this)}/>
            </View>
    );
    }
    }
