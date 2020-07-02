import React from "react";
import {Alert, AppRegistry, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Fumi} from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import {endereco} from "./TesteComponente";
import Communications from "react-native-communications";

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

export default class Chamado extends React.Component {
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
                        iconName={'user'}
                        iconColor={'#77116a'}
                        onChangeText={(text) => this.nome = text}
                    />

                    <Fumi
                        style={styles.input}
                        label={'Assunto'}
                        iconClass={FontAwesomeIcon}
                        iconName={'comments'}
                        iconColor={'#77116a'}
                        onChangeText={(text) => this.assunto = text}
                    />

                    <Fumi
                        style={styles.input}
                        label={'E-mail'}
                        iconClass={FontAwesomeIcon}
                        iconName={'envelope'}
                        iconColor={'#77116a'}
                        onChangeText={(text) => this.email = text}
                    />

                    <Text style={styles.detalhe}> Detalhes </Text>
                    <UselessTextInput style = {styles.inputMaior}
                        multiline = {true}
                        numberOfLines = {10}
                        onChangeText={(text) => this.detalhes = text}
                    />


                    <TouchableOpacity
                        style = {styles.submitButton}
                        onPress={() => Communications.email(['aboutreact11@gmail.com'],null,null,'Abrir Chamado',
                            `Nome: ${this.nome} Assunto: ${this.assunto}  E-mail: ${this.email} Detalhes: ${this.detalhes}`)}>
                        {/*email(to, cc, bcc, subject, body)*/}
                        <Text style={styles.submitButtonText}>Enviar </Text>
                    </TouchableOpacity>


                </View>

            </ScrollView>
        );
    }


}

Chamado.navigationOptions = {
    title: 'Abrir um Chamado',
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
        backgroundColor: '#000000',
    },
    inputMaior: {
        backgroundColor: '#fafdff',
        marginTop: 4,
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
    detalhe: {
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
AppRegistry.registerComponent(
    'AwesomeProject',
    () => UselessTextInputMultiline
);
