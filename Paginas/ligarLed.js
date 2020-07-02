import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';

export default class ligarLed extends React.Component {
    constructor() {
        super();
        //Setting up global variable
        //global.MyVar = 'https://aboutreact.com';
    }



    render() {
        return (
            <View style={styles.MainContainer}>
                {/*Running GET Request*/}
                <Button title="LIGAR LED" onPress={this.ligarLed} />

                {/*Running POST Request*/}
                <Button title="APAGAR LEG" onPress={this.apagarLed} />
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
