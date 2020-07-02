import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';
import {endereco} from './TesteComponente';
import RNPickerSelect from "react-native-picker-select";


export default class AddEquipamento extends React.Component {
    render() {
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.content}
            >

                <View style={[styles.card2, { backgroundColor: '#000000' }]}>
                    <Fumi
                        style={styles.input}
                        label={'Nome'}
                        iconClass={FontAwesomeIcon}
                        iconName={'desktop'}
                        iconColor={'#063e02'}
                        onChangeText={(text) => this.nome = text}
                    />

                    <View style={styles.fundoBranco} >
                        <Text style={styles.titleStatus}>Categoria</Text>
                        <RNPickerSelect
                            onValueChange={(text) => this.categoria = text}
                            items={[
                                { label: 'Iluminação', value: 'Iluminacao' },
                                { label: 'Tomada', value: 'Tomada' },
                                { label: 'Eletrodomestico', value: 'Eletrodomestico' },
                                { label: 'Outro', value: 'Outro' },
                            ]}
                        />
                    </View>


                    <View style={styles.fundoBranco} >
                        <Text style={styles.titleStatus}>Status</Text>
                        <RNPickerSelect
                            onValueChange={(text) => this.status = text}
                            items={[
                                { label: 'Ativo', value: 'Ativo' },
                                { label: 'Desativado', value: 'Desativado' },
                            ]}
                        />
                    </View>

                    <View style={styles.fundoBranco} >
                        <Text style={styles.titleStatus}>Estado</Text>
                        <RNPickerSelect
                            onValueChange={(text) => this.estado = text}
                            items={[
                                { label: 'Ativo', value: 'Ativo' },
                                { label: 'Desativado', value: 'Desativado' },
                            ]}
                        />
                    </View>

                    <Fumi
                        style={styles.input}
                        label={'Marca'}
                        iconClass={FontAwesomeIcon}
                        iconName={'bolt'}
                        iconColor={'#063e02'}
                        onChangeText={(text) => this.marca = text}
                    />

                    <Fumi
                        style={styles.input}
                        label={'Modelo'}
                        iconClass={FontAwesomeIcon}
                        iconName={'bolt'}
                        iconColor={'#063e02'}
                        onChangeText={(text) => this.modelo = text}
                    />

                    <Fumi
                        style={styles.input}
                        label={'Endereço de IP'}
                        iconClass={FontAwesomeIcon}
                        iconName={'bolt'}
                        iconColor={'#063e02'}
                        keyboardType="numeric"
                        maxLength={15}
                        onChangeText={(text) => this.enderecoIp = text}
                    />
                    <TouchableOpacity onPress={this.EnviarFormularioEquipamentos}
                                      style = {styles.submitButton}
                    >
                        <Text style = {styles.submitButtonText}> Cadastrar Equipamento </Text>
                    </TouchableOpacity>


                </View>
            </ScrollView>
        );
    }

    EnviarFormularioEquipamentos = async () => {
        this.enviar()
    };

    enviar() {
        const dataToSend = {categoria: this.categoria, nome: this.nome, status: this.status, estado:this.estado,
            marca: this.marca, modelo: this.modelo, endereco_ip: this.enderecoIp  };

        let formBody = [];
        for (const key in dataToSend) {
            const encodedKey = encodeURIComponent(key);
            const encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');


        fetch(endereco.enderecoEquipamentos, {
            method: 'POST',

            body:JSON.stringify(dataToSend),

            headers: {//Header Defination
                'Content-Type': 'application/json;charset=UTF-8'
            },
        })
            .then(response => {
                if (response.status === 201) {
                    Alert.alert("Sucesso!",
                        "Equipamento Cadastrado!");

                    this.props.navigation.navigate('Equipamentos')
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
                "Equipamentos não Cadastrado! Tente novamente!");
        });


    }
}

AddEquipamento.navigationOptions = {
    title: 'Adicionar novo Equipamento',
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
        fontSize: 28,
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
    titleStatus: {
        //textAlign: 'center',
        color: 'rgba(6,15,19,0.51)',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
