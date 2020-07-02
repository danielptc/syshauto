import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';
import {endereco, } from './TesteComponente';
import RNPickerSelect from 'react-native-picker-select';

export default class DetalhesEquipamento extends React.Component {


    render() {
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.content}
            >
                <View style={[styles.card2, {backgroundColor: '#000000'}]}>

                    <Fumi
                        label={'Nome:'}
                        value={global.nomeEquipamento}
                        iconClass={FontAwesomeIcon}
                        iconName={'plug'}
                        iconColor={'#9b646a'}
                        iconSize={15}
                        editable={false}

                    />

                    <Fumi
                        style={styles.input}
                        label={'Categoria:'}
                        value={global.categoriaEquipamento}
                        iconClass={FontAwesomeIcon}
                        iconName={'desktop'}
                        iconColor={'#9b646a'}
                        editable={false}
                    />

                    <Fumi
                        style={styles.input}
                        label={'Status:'}
                        value={global.statusEquipamento}
                        iconClass={FontAwesomeIcon}
                        iconName={'bolt'}
                        iconColor={'#9b646a'}
                        editable={false}
                    />

                    <Fumi
                        style={styles.input}
                        label={'Estado:'}
                        value={global.estadoEquipamento}
                        iconClass={FontAwesomeIcon}
                        iconName={'bolt'}
                        iconColor={'#9b646a'}
                        editable={false}
                    />

                    <Fumi
                        style={styles.input}
                        label={'Marca:'}
                        value={global.marcaEquipamento}
                        iconClass={FontAwesomeIcon}
                        iconName={'plug'}
                        iconColor={'#9b646a'}
                        editable={false}

                    />

                    <Fumi
                        style={styles.input}
                        label={'Modelo:'}
                        value={global.modeloEquipamento}
                        iconClass={FontAwesomeIcon}
                        iconName={'desktop'}
                        iconColor={'#9b646a'}
                        editable={false}
                    />

                    <Fumi
                        style={styles.input}
                        label={'Endereço de IP:'}
                        value={global.enderecoIpEquipamento}
                        iconClass={FontAwesomeIcon}
                        iconName={'bolt'}
                        iconColor={'#9b646a'}
                        editable={false}
                    />

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('EdicaoEquipamentos')}
                                      style={styles.submitButton}
                    >
                        <Text style={styles.submitButtonText}> Editar Equipamento</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
        );
    }
}


DetalhesEquipamento.navigationOptions = {
    title: `Detalhes do Equipamento`,
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
