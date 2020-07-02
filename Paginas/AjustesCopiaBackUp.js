import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert, Button} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi,} from 'react-native-textinput-effects';
import {endereco} from './TesteComponente';
import RNPickerSelect from 'react-native-picker-select';

/*
export default class Ajustes extends React.Component {
    constructor(props) {
        super(props);
        //Setting up global variable
        global.ipServidor = 'null';
    }

    render() {
        return (

                <View style={[styles.card2, { backgroundColor: '#000000' }]}>
                    <Text style={styles.title}>Selecionar IP do Servidor</Text>
                    <Fumi
                        style={styles.input}
                        label={'IP'}
                        iconClass={FontAwesomeIcon}
                        iconName={'graduation-cap'}
                        iconColor={'#77116a'}
                        //keyboardType="numeric"
                        onChangeText={(text) => this.nada = text}

                    />

                    <View style={styles.fundoBranco} >
                        <Text style={styles.titleTipoOS}>IP do Servidor </Text>
                        <RNPickerSelect
                            onValueChange={(text) => this.ip = text}
                            //Icon={user}
                            items={[
                                { label: 'IP Casa', value: '"http://192.168.0.121:8080/"' },
                                { label: 'IP Roteador', value: "http://10.0.0.100:8080/" },
                                { label: 'IP Vó', value: "http://192.168.25.10:8080/" },
                            ]}
                        />
                    </View>


                    <TouchableOpacity  onPress={ () => this.funcao()}
                                      style = {styles.submitButton}
                    >
                        <Text style = {styles.submitButtonText}> Salvar</Text>
                    </TouchableOpacity>

                </View>

        );
    }


    funcao () {
        this.setState({
        this:global.ipServidor = this.ip
    });
        Alert.alert("IP do servidor alterado",
            `IP atual: ${global.ipServidor}`)

        this.props.navigation.navigate('Home')

    }

}

Ajustes.navigationOptions = {
    title: 'Editar IP Servidor',
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
    },
});
*/
