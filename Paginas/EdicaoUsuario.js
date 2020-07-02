import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';
import DatePicker from "react-native-datepicker";
import RNPickerSelect from 'react-native-picker-select';
import {endereco} from './TesteComponente';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class EdicaoUsuario extends React.Component {
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
                        style={styles.input}
                        label={`Nome: ${global.nome}`}
                        iconClass={FontAwesomeIcon}
                        iconName={'user'}
                        iconColor={'#77116a'}
                        onChangeText={(text) => this.nome = text}
                    />
                    <Fumi
                        style={styles.input}
                        label={`CPF: ${global.cpf}`}
                        iconClass={FontAwesomeIcon}
                        iconName={'id-card'}
                        iconColor={'#77116a'}
                        keyboardType="numeric"
                        onChangeText={(text) => this.cpf = text}
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
                        label={`E-mail: ${global.email}`}
                        iconClass={FontAwesomeIcon}
                        iconName={'at'}
                        iconColor={'#77116a'}
                        onChangeText={(text) => this.email = text}
                    />

                    <Fumi
                        style={styles.input}
                        label={`Telefone: ${global.telefone}`}
                        iconClass={FontAwesomeIcon}
                        iconName={'phone'}
                        iconColor={'#77116a'}
                        keyboardType="numeric"
                        onChangeText={(text) => this.telefone = text}
                    />
                    <TouchableOpacity onPress={this.EnviarFormularioDispositivos}
                                      style = {styles.submitButton}
                    >
                        <Text style = {styles.submitButtonText}> Editar Usuário </Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
        );
    }

    EnviarFormularioDispositivos = async () => {
        this.setState({
            this: this.id = global.idUsuario,
        });

        this.enviar()
    };

    enviar() {
        const dataToSend = {id: this.id, nome: this.nome, cpf: this.cpf, dataNascimento: this.state.dateAniver,
            sexo: this.sexo, email: this.email, telefone: this.telefone};

        let formBody = [];
        for (const key in dataToSend) {
            const encodedKey = encodeURIComponent(key);
            const encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');


        fetch(endereco.enderecoUsuario, {
            method: 'PUT',

            body:JSON.stringify(dataToSend),

            headers: {//Header Defination
                'Content-Type': 'application/json;charset=UTF-8'
            },
        })
            .then(response => {
                if (response.status === 200) {
                    Alert.alert("Sucesso!",
                        "Usuário modificado!");

                    this.props.navigation.navigate('Usuarios')

                }
                else if (response.status !== 200){
                    Alert.alert("ERRO!",
                        "Preencha todos os campos!");

                }
            })
            .then(response => {
                console.debug(response);
                // ...
            }).catch(error => {
            Alert.alert("ERRO!",
                "Não foi possivel editar o Usuario! Tente Nomavente!");
        });
    }
}

EdicaoUsuario.navigationOptions = {
    title: 'Editar Usuário',
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
    titleDate: {
        //textAlign: 'center',
        color: '#060f13',
        fontSize: 16,
        fontWeight: 'bold',
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
});
