import React, { Component } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {endereco} from './TesteComponente';

export default class RecebendoComponente extends Component {
    getDataUsingGet() {
        //GET request
        fetch(endereco.relatorioEnergia, {
            method: 'GET',
            //Request Type
        })
            .then(response => response.json())
            //If response is in json then in success
            .then(responseJson => {
                //Success
                alert(JSON.stringify(responseJson));
                console.log(responseJson);
            })
            //If response is not in json then in error
            .catch(error => {
                //Error
                alert(JSON.stringify(error));
                console.error(error);
            });
    }


    render() {
        return (
            <View style={styles.MainContainer}>
                {/*Running GET Request*/}
                <Button title="Get Data Using GET" onPress={this.getDataUsingGet} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        margin: 10,
    },
});
