import React from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Button, ScrollView, Alert} from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
//import { Select, Option } from 'react-native-select-lists';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Fumi } from 'react-native-textinput-effects';
import {endereco} from './TesteComponente';
import DatePicker from "react-native-datepicker";
import RNPickerSelect from 'react-native-picker-select';

export default class CadastroUsuario extends React.Component {
    constructor(props){
        super(props)
        this.state = {dateAniver:"2012-10-20"}
    }

    render() {
        return (


            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.content}
            >

                <View style={[styles.card2, { backgroundColor: '#000000' }]}>
                    <Fumi
                        label={'Nome'}
                        labelStyle={{ color: '#a3a3a3' }}
                        inputStyle={{ color: '#f95a25' }}
                        iconClass={FontAwesomeIcon}
                        iconName={'user'}
                        iconColor={'#f95a25'}
                        iconSize={15}
                        onChangeText={(text) => this.nome = text}
                    />
                    <Fumi
                        style={styles.input}
                        label={'CPF'}
                        iconClass={FontAwesomeIcon}
                        iconName={'id-card'}
                        iconColor={'#ff5d28'}
                        keyboardType="numeric"
                        onChangeText={(text) => this.cpf = text}
                        maxLength={11}
                    />

                    <View style={styles.viewData} >
                        <Text style={styles.titleDate}>Data de Nascimento</Text>
                    <DatePicker
                        style={styles.dataNascimento}
                        date={this.state.dateAniver}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => {this.setState({dateAniver: date})}}
                    />
                    </View>




                    <View style={styles.viewData} >
                        <Text style={styles.titleDate}>Sexo</Text>
                    <RNPickerSelect
                        onValueChange={(text) => this.sexo = text}
                        items={[
                            { label: 'Masculino', value: 'Masculino' },
                            { label: 'Feminino', value: 'Feminino' },
                        ]}
                    />
                    </View>

                    <Fumi
                        style={styles.input}
                        label={'E-mail'}
                        iconClass={FontAwesomeIcon}
                        iconName={'at'}
                        iconColor={'#ff6900'}
                        onChangeText={(text) => this.email = text}
                    />

                    <Fumi
                        style={styles.input}
                        label={'Telefone'}
                        iconClass={FontAwesomeIcon}
                        iconName={'phone'}
                        iconColor={'#ff6900'}
                        keyboardType="numeric"
                        onChangeText={(text) => this.telefone = text}
                        maxLength={11}
                    />


                    <TouchableOpacity onPress={this.EnviarFormularioUsuario}
                        style = {styles.submitButton}
                        >
                        <Text style = {styles.submitButtonText}> Cadastrar </Text>
                    </TouchableOpacity>


                </View>
            </ScrollView>
        );
    }

    EnviarFormularioUsuario = async () => {
        this.enviar()
    };

    enviar() {
        const dataToSend = {nome: this.nome, cpf: this.cpf, dataNascimento: this.state.dateAniver, sexo: this.sexo,
            email:this.email, telefone: this.telefone};

        let formBody = [];
        for (const key in dataToSend) {
            const encodedKey = encodeURIComponent(key);
            const encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');


        fetch(endereco.enderecoUsuario, {
            method: 'POST',

            body:JSON.stringify(dataToSend),

            headers: {//Header Defination
                'Content-Type': 'application/json;charset=UTF-8'
            },
        })
            .then(response => {
                if (response.status === 201) {
                    Alert.alert("Sucesso!",
                        "Usuário Cadastrado!");

                    this.props.navigation.navigate('Usuarios')
                }
                else if (response.status !== 201){
                    Alert.alert("ERRO!",
                        "Preencha todos os campos!");

                }
            })
            .then(response => {
                // ...
            }).catch(error => {
            Alert.alert("ERRO!",
                "Usuário não Cadastrado! Tente novamente!");
        });

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
    dataNascimento: {
        backgroundColor: '#ffffff',
        padding: 10,
        width: wp('92%'),
        height: hp('8%'),
    },
    viewData:{
        backgroundColor: '#ffffff',
        marginTop: 4,
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
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        opacity: 0.8,
    },
    titleDate: {
        //textAlign: 'center',
        color: '#060f13',
        fontSize: 16,
        fontWeight: 'bold',
    }
})
