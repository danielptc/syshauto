import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {
    Fumi,
} from 'react-native-textinput-effects';
import CadastroUsuario from "./CadastroUsuario";
import { withFormik } from 'formik';

export default class AddDispositivo extends React.Component {
    state = {
        nome: '',
        tipoOS: '',
        status: ''
    }

    handleNome = (text) => {
        this.setState({ nome: text })
    }
    handleTipoOS = (text) => {
        this.setState({ tipoOS: text })
    }
    handleStatus = (text) => {
        this.setState({ status: text })
    }

    getDataUsingPost() {
        //POST json
        const dataToSend = {nome: "teste", tipoOS: "this.handleTipoOS", status: "this.state"};

        //making data to send on server
        let formBody = [];
        for (const key in dataToSend) {
            const encodedKey = encodeURIComponent(key);
            const encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');

        //POST request
        fetch('http://localhost:8080/v3/dispositivo/', {
            method: 'POST', //Request Type
            body: JSON.stringify(dataToSend), //post body
            headers: {//Header Defination
                'Content-Type': 'application/json;charset=UTF-8'
            },
        })
            .then(response => response.json())
            //If response is in json then in success
            .then(responseJson => {
                alert(JSON.stringify(responseJson));
                console.log(responseJson);
            })
            //If response is not in json then in error
            .catch(error => {
                alert(JSON.stringify(error));
                console.error(error);
            });
    }



    render() {
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.content}
            >
                <View style={[styles.card2, { backgroundColor: '#000000' }]}>
                    <Text style={styles.title}>Adicionar DDispositivo</Text>
                    <Fumi
                        label={'Nome'}
                        labelStyle={{ color: '#a3a3a3' }}
                        inputStyle={{ color: '#f95a25' }}
                        iconClass={FontAwesomeIcon}
                        iconName={'phone'}
                        iconColor={'#f95a25'}
                        iconSize={15}
                        onChangeText={this.handleNome}
                    />
                    <Fumi
                        style={styles.input}
                        label={'Tipo OS'}
                        iconClass={FontAwesomeIcon}
                        iconName={'graduation-cap'}
                        iconColor={'#77116a'}
                        onChangeText={this.handleTipoOS}
                    />

                    <Fumi
                        style={styles.input}
                        label={'Status'}
                        iconClass={FontAwesomeIcon}
                        iconName={'graduation-cap'}
                        iconColor={'#77116a'}
                        onChangeText={this.handleStatus}
                    />
                    <TouchableOpacity onPress={this.getDataUsingPost}
                                      style = {styles.submitButton}
                    >
                        <Text style = {styles.submitButtonText}> Cadastrar Dispositivo </Text>
                    </TouchableOpacity>


                </View>

            </ScrollView>
        );
    }
}

AddDispositivo.navigationOptions = {
    title: 'Adicionar novo Dispositivo',
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
});

