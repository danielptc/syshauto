import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';

export default class testeGet extends React.Component {



    ligarLed() {
        const  msg02 = "Testando";
        const msg01 = msg02;


        const dataToSend = "Testando";



        fetch('http://10.61.57.103:8080/v3/dispositivo/desligarLed', {
            method: 'POST',

            body: "ligar",

            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    }



    apagarLed() {
        const  msg02 = "Testando";
        const msg01 = msg02;


        const dataToSend = "Testando";



        fetch('http://10.61.57.103:8080/v3/dispositivo/desligarLed', {
            method: 'POST',

            body: "desligar",

            headers: {'Content-Type': 'application/json;charset=UTF-8'},

        })
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                {/*Running GET Request*/}
                <Button title="Get Data Using GET" onPress={this.getDataUsingGet} />

                {/*Running POST Request*/}
                <Button title="Get Data Using POST" onPress={this.getDataUsingPost} />
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
