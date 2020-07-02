import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert, Button} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi,} from 'react-native-textinput-effects';
import RNPickerSelect from 'react-native-picker-select';
import {enderecoUrl} from "./TesteComponente";


export default class Informacoes extends React.Component {
    constructor(props) {
        super(props);
        //Setting up global variable
        global.ipServidor = 'null';
    }

    render() {
        return (

                Alert.alert("IP do servidor alterado",
                `IP atual: ${enderecoUrl.ipUrl}`)




        );
    }

}

Informacoes.navigationOptions = {
    title: 'informações',
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
        backgroundColor: '#000000',
    },
    content: {
        // not cool but good enough to make all inputs visible when keyboard is active
        paddingBottom: 300,
    },
    card1: {
        paddingVertical: 16,
    },
    card2: {
        padding: 16,
    },
    input: {
        marginTop: 4,
    },
    title: {
        paddingBottom: 16,
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        opacity: 0.8,
    },
    submitButton: {
        backgroundColor: 'skyblue',
        padding: 10,
        margin: 15,
        height: 40,
        borderRadius: 10,
    },
    submitButtonText:{
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fundoBranco:{
        backgroundColor: '#ffffff',
        marginTop: 4,
    },
    titleTipoOS: {
        //textAlign: 'center',
        color: 'rgba(6,15,19,0.51)',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
