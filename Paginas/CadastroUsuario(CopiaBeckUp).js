import React from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Button, ScrollView} from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Select, Option } from 'react-native-select-lists';

import {
    Fumi,
} from 'react-native-textinput-effects';

export default class CadastroUsuario extends React.Component {
    state = {
        nome: '',
        cpf: '',
        dataNascimento: '',
        sexo: '',
        email: '',
        telefone: '',
        password: ''
    }
    handleNome = (text) => {
        this.setState({ nome: text })
    }
    handleCpf = (text) => {
        this.setState({ cpf: text })
    }

    handleDataNascimento = (text) => {
        this.setState({ dataNascimento: text })
    }

    handleSexo = (text) => {
        this.setState({ sexo: text })
    }

    handleEmail = (text) => {
        this.setState({ email: text })
    }

    handleTelefone = (text) => {
        this.setState({ telefone: text })
    }

    handlePassword = (text) => {
        this.setState({ password: text })
    }

    login = (email, password, nome, cpf, telefone, sexo, dataNascimento) => {
        alert('email: ' + email + ' password: '+ password + ' nome: ' + nome + ' cpf: ' + cpf + ' telefone: ' + telefone + ' sexo: ' + sexo + ' Data de Nascimento: ' + dataNascimento)
    }




    getDataUsingPost() {
        //POST json
        const dataToSend = {nome: "TesteGET02", tipoOS:"Usando",status:"IDE"};

        //making data to send on server
        let formBody = [];
        for (const key in dataToSend) {
            const encodedKey = encodeURIComponent(key);
            const encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');

        //POST request
        fetch('http://10.61.57.103:8080/v1/usuario', {
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
                    <Text style={styles.title}>Cadastrar Usuario</Text>
                    <Fumi
                        label={'Nome'}
                        labelStyle={{ color: '#a3a3a3' }}
                        inputStyle={{ color: '#f95a25' }}
                        iconClass={FontAwesomeIcon}
                        iconName={'phone'}
                        iconColor={'#f95a25'}
                        iconSize={15}
                        onChangeText = {this.handleNome}
                    />
                    <Fumi
                        style={styles.input}
                        label={'CPF'}
                        iconClass={FontAwesomeIcon}
                        iconName={'graduation-cap'}
                        iconColor={'#77116a'}
                        keyboardType="numeric"
                        onChangeText = {this.handleCpf}
                    />

                    <Fumi
                        style={styles.input}
                        label={'Data de Nascimento'}
                        iconClass={FontAwesomeIcon}
                        iconName={'graduation-cap'}
                        iconColor={'#77116a'}
                        onChangeText = {this.handleDataNascimento}
                    />

                    <Fumi
                        style={styles.input}
                        label={'Sexo'}
                        iconClass={FontAwesomeIcon}
                        iconName={'graduation-cap'}
                        iconColor={'#77116a'}
                        onChangeText = {this.handleSexo}
                    />

                    <Fumi
                        style={styles.input}
                        label={'E-mail'}
                        iconClass={FontAwesomeIcon}
                        iconName={'graduation-cap'}
                        iconColor={'#77116a'}
                        onChangeText = {this.handleEmail}
                    />

                    <Fumi
                        style={styles.input}
                        label={'Telefone'}
                        iconClass={FontAwesomeIcon}
                        iconName={'graduation-cap'}
                        iconColor={'#77116a'}
                        keyboardType="numeric"
                        onChangeText = {this.handleTelefone}
                    />

                    <Fumi
                        style={styles.input}
                        label={'Senha'}
                        iconClass={FontAwesomeIcon}
                        iconName={'graduation-cap'}
                        iconColor={'#77116a'}
                        onChangeText = {this.handlePassword}
                    />

                    <TouchableOpacity onPress={this.getDataUsingPost}
                                      style = {styles.submitButton}
                    >
                        <Text style = {styles.submitButtonText}> Cadastrar </Text>
                    </TouchableOpacity>


                </View>
            </ScrollView>
        );
    }

}

CadastroUsuario.navigationOptions = {
    title: 'Cadastrar Usuario',
}
const styles = StyleSheet.create({
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
        color: '#404d5b',
        fontSize: 20,
        fontWeight: 'bold',
        opacity: 0.8,
    },
})
