import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';
import {endereco} from './TesteComponente';
import RNPickerSelect from 'react-native-picker-select';

export default class AddDispositivo extends React.Component {
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
                        iconName={'mobile'}
                        iconColor={'#f95a25'}
                        iconSize={15}
                        onChangeText={(text) => this.nome = text}
                    />
                    <View style={styles.fundoBranco} >
                        <Text style={styles.titleTipoOS}>Sistema Operacional</Text>
                        <RNPickerSelect
                            onValueChange={(text) => this.tipoOS = text}
                            //Icon={user}
                            items={[
                                { label: 'Android', value: 'Android' },
                                { label: 'Iphone', value: 'Iphone' },
                                { label: 'Windows Phone', value: 'WindousPhone' },
                            ]}
                        />
                    </View>

                    <View style={styles.fundoBranco} >
                        <Text style={styles.titleTipoOS}>Status</Text>
                        <RNPickerSelect
                            onValueChange={(text) => this.status = text}
                            items={[
                                { label: 'Ativo', value: 'Ativo' },
                                { label: 'Desativado', value: 'Desativado' },
                            ]}
                        />
                    </View>

                    <TouchableOpacity onPress={this.EnviarFormularioDispositivos}
                                      style = {styles.submitButton}
                    >
                        <Text style = {styles.submitButtonText}> Cadastrar Dispositivo </Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
        );
    }

    EnviarFormularioDispositivos = async () => {
        this.enviar()
    };

    enviar() {
        const dataToSend = {nome: this.nome, tipoOS: this.tipoOS, status: this.status};

        let formBody = [];
        for (const key in dataToSend) {
            const encodedKey = encodeURIComponent(key);
            const encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        //formBody = formBody.join('&');


        fetch( endereco.enderecoDispositivos, {
            method: 'POST',

            body:JSON.stringify(dataToSend),

            headers: {//Header Defination
                'Content-Type': 'application/json;charset=UTF-8'
            },
        })
            .then(response => {
                if (response.status === 201) {
                    Alert.alert("Sucesso!",
                        "Dispositivo Cadastrado!");

                    this.props.navigation.navigate('Dispositivos')
                }
                else if (response.status !== 201){
                    Alert.alert("ERRO!",
                        "Preencha todos os campos!");

                }
            })
            .then(response => {
                console.debug(response);
                // ...
            }).catch(error => {
            Alert.alert("ERRO!",
                "Dispositivo não Cadastrado! Tente novamente!");
        });

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
    fundoBranco:{
        backgroundColor: '#ffffff',
        marginTop: 4,
    },
    titleTipoOS: {
        //textAlign: 'center',
        color: 'rgba(6,15,19,0.51)',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
