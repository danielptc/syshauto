import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';
import {endereco, } from './TesteComponente';
import RNPickerSelect from 'react-native-picker-select';

export default class DetalhesDispositivo extends React.Component {


    render() {
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.content}
            >
                <View style={[styles.card2, { backgroundColor: '#000000' }]}>

                    <Fumi
                        style={styles.input}
                        label={'Nome do Dispositivo:'}
                        value={global.nomeDispositivo}
                        iconClass={FontAwesomeIcon}
                        iconName={'mobile'}
                        iconColor={'#231f77'}
                        editable={false}
                    />

                    <Fumi
                        style={styles.input}
                        label={'Sistema Operacional:'}
                        value={global.sistemaOperacopnalDispositivo}
                        iconClass={FontAwesomeIcon}
                        iconName={'mobile'}
                        iconColor={'#231f77'}
                        editable={false}
                    />

                    <Fumi
                        style={styles.input}
                        label={'Status:'}
                        value={global.statusDispositivo}
                        iconClass={FontAwesomeIcon}
                        iconName={'mobile'}
                        iconColor={'#231f77'}
                        editable={false}
                    />

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('EdicaoDispositivo')}
                                      style = {styles.submitButton}
                    >
                        <Text style = {styles.submitButtonText}> Editar Dispositivo</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
        );
    }

 }

DetalhesDispositivo.navigationOptions = {
    title: 'Detalhes do Dispositivo',
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
