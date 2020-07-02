import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert, TextInput} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';
import {endereco} from './TesteComponente';
import Communications from 'react-native-communications';


class UselessTextInput extends React.Component {
    render() {
        return (
            <TextInput
                {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                editable = {true}
                maxLength = {1000}
            />
        );
    }
}


export default class ChamadoAddEquipamento extends React.Component {
    render() {
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.content}
            >

                <View style={[styles.card2, { backgroundColor: '#000000' }]}>
                    <Fumi
                        label={'Categoria'}
                        iconClass={FontAwesomeIcon}
                        iconName={'plug'}
                        iconColor={'#000000'}
                        iconSize={15}
                        onChangeText={(text) => this.categoria = text}

                    />

                    <Fumi
                        style={styles.input}
                        label={'Nome'}
                        iconClass={FontAwesomeIcon}
                        iconName={'desktop'}
                        iconColor={'#000000'}
                        onChangeText={(text) => this.nome = text}
                    />

                    <Fumi
                        style={styles.input}
                        label={'Status'}
                        iconClass={FontAwesomeIcon}
                        iconName={'bolt'}
                        iconColor={'#000000'}
                        onChangeText={(text) => this.status = text}
                    />

                    <Text style={styles.observacao}> Observações </Text>
                    <UselessTextInput style = {styles.inputMaior}
                                      multiline = {true}
                                      numberOfLines = {10}
                                      onChangeText={(text) => this.observacao = text}
                    />


                    <TouchableOpacity
                        style = {styles.submitButton}
                        onPress={() => Communications.email(['aboutreact11@gmail.com'],null,null,'Adicionar Equipamento',
                            `Categoria: ${this.categoria} Nome: ${this.nome}  Status: ${this.status} Observações: ${this.observacao}`)}>
                        {/*email(to, cc, bcc, subject, body)*/}
                        <Text style={styles.submitButtonText}>Enviar </Text>
                    </TouchableOpacity>


                </View>
            </ScrollView>
        );
    }

}

ChamadoAddEquipamento.navigationOptions = {
    title: 'Abrir Chamado Add Equipamentos',
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
    inputMaior: {
        backgroundColor: '#fafdff',
        marginTop: 4,
    },
    observacao: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        opacity: 0.8,
    },
});
