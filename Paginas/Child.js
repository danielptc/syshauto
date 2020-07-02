import React, { Component } from 'react';
import { Button, View, Text, TextInput } from 'react-native';

export default class Child extends Component {
    calc(){
        this.props.callback(this.props.num = this.userName);
    }

    funcao= () => {

        this.calc()
    }


    render(){
        return(
            <View>
                <Text> Testando </Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="userName"
                    onChangeText={(text) => this.userName = text}
                />
                <Button onPress={this.funcao} title="Calc" />
            </View>
        )
    }
}
