import React, { Component } from 'react';

import { AppRegistry, StyleSheet, Text, View, Switch, Alert} from 'react-native';
import {iluminacao} from "./TesteComponente";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import ChamadoAddEquipamento from "./ChamadoAddEquipamento";

export default class TesteSwitch extends React.Component {

    constructor(){

        super();

        this.state ={

            ValorChaveGeral :  false,
            ValorChaveQuadro :  false,
            ValorChaveFundo :  false,
            ValorChaveTomada :  false,
            ValorChaveTomada02 :  false,
            ValorChaveTomada03 :  false,

        }
    }

    ChaveGeral = (valueGeral) =>{

        this.setState({

            ValorChaveGeral: valueGeral
        })

        if(valueGeral == true)
        {

            iluminacao.ligarLuzGeral()
        }
        else{

            iluminacao.desligarLuzGeral()
        }

    }

    ChaveQuadro = (valueQuadro) =>{

        this.setState({

            ValorChaveQuadro: valueQuadro
        })

        if(valueQuadro === true)
        {

            iluminacao.ligaLuzQuadro()
        }
        else{

            iluminacao.desligarLuzQuadro()
        }

    }

    ChaveFundo = (valueFundo) =>{

        this.setState({

            ValorChaveFundo: valueFundo
        })

        if(valueFundo === true)
        {

            iluminacao.desligarLuzFundo()

        }
        else{

            iluminacao.ligarLuzFundo()
        }

    }

    ChaveTomada = (valueTomada) =>{

        this.setState({

            ValorChaveTomada: valueTomada
        })


        if(valueTomada === true)
        {

            iluminacao.ligarTomada01()
        }
        else{

            iluminacao.desligarTomada01()
        }

    }

    ChaveTomada02 = (valueTomada02) =>{

        this.setState({

            ValorChaveTomada02: valueTomada02
        })


        if(valueTomada02 === true)
        {

            iluminacao.ligarTomada02()
        }
        else{

            iluminacao.desligaDormi02()
        }

    }

    ChaveTomada03 = (valueTomada03) =>{

        this.setState({

            ValorChaveTomada03: valueTomada03
        })


        if(valueTomada03 === true)
        {

            iluminacao.ligarTomada03()
        }
        else{

            iluminacao.desligaDormi03()
        }

    }



    render() {

        return (

            <View style={styles.container}>
                <View>
                    <Text style={styles.titulo} > Controle Geral</Text>
                </View>
            <View style={styles.rect}>
            <View style={styles.iluminacaoGeralStackStackRow}>
            <View style={styles.iluminacaoGeralStackStack}>
            <View style={styles.iluminacaoGeralStack}>
            <Text style={styles.iluminacaoGeral}>Luz Geral</Text>
        <Text style={styles.iluminacaoGeral2}>Luz Palco</Text>
        </View>
        <View style={styles.iluminacaoGeral3Stack}>
            <Text style={styles.iluminacaoGeral3}>Luz Púlpito</Text>
            <Text style={styles.iluminacaoGeral4}>Ventilador</Text>
            <Text style={styles.iluminacaoGeral5}>Jogo Luz</Text>
            <Text style={styles.iluminacaoGeral6}>Ferro</Text>
        </View>
        </View>
        <View style={styles.materialSwitchColumn}>
            <Switch
                onValueChange={(valueGeral) => this.ChaveGeral(valueGeral)}
                style={styles.materialSwitch}
                value={this.state.ValorChaveGeral} />
            <Switch
                onValueChange={(valueQuadro) => this.ChaveQuadro(valueQuadro)}
                style={styles.materialSwitch2}
                value={this.state.ValorChaveQuadro} />
            <Switch
                onValueChange={(valueFundo) => this.ChaveFundo(valueFundo)}
                style={styles.materialSwitch3}
                value={this.state.ValorChaveFundo} />
            <Switch
                onValueChange={(valueTomada) => this.ChaveTomada(valueTomada)}
                style={styles.materialSwitch4}
                value={this.state.ValorChaveTomada} />
            <Switch
                onValueChange={(valueTomada02) => this.ChaveTomada02(valueTomada02)}
                style={styles.materialSwitch4}
                value={this.state.ValorChaveTomada02} />
            <Switch
                onValueChange={(valueTomada03) => this.ChaveTomada03(valueTomada03)}
                style={styles.materialSwitch4}
                value={this.state.ValorChaveTomada03} />
        </View>
        </View>
    </View>
    </View>

        );
    }
}

TesteSwitch.navigationOptions = {
    title: 'Controle de Iluminação',
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,1)"
    },
    rect: {
        width: 383,
        height: 450,
        backgroundColor: "rgb(155,155,155)",
        borderRadius: 22,
        borderColor: "rgba(255,255,255,1)",
        borderWidth: 4,
        marginTop: 30,
        marginLeft: 18
    },
    iluminacaoGeral: {
        top: 0,
        left: 0,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        lineHeight: 40,
        fontSize: 23,
    },
    iluminacaoGeral2: {
        top: 60,
        left: 0,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        lineHeight: 40,
        fontSize: 20,
    },
    iluminacaoGeralStack: {
        top: 0,
        left: 0,
        width: 105,
        height: 80,
        position: "absolute"
    },
    iluminacaoGeral3: {
        top: 30,
        left: 0,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        lineHeight: 40,
        fontSize: 21,
    },
    tomadasTitulo: {
        top: 60,
        left: 0,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        lineHeight: 40,
        fontSize: 25,
    },
    iluminacaoGeral4: {
        top: 90,
        left: 0,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        lineHeight: 40,
        fontSize: 21,
    },
    iluminacaoGeral5: {
        top: 150,
        left: 0,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        lineHeight: 40,
        fontSize: 21,
    },
    iluminacaoGeral6: {
        top: 210,
        left: 0,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        lineHeight: 40,
        fontSize: 21,
    },
    iluminacaoGeral3Stack: {
        top: 80,
        left: 0,
        width: 105,
        height: 80,
        position: "absolute"
    },
    iluminacaoGeralStackStack: {
        width: 105,
        height: 160
    },
    materialSwitch: {
        width: 65,
        height: 43,
        marginTop: -15
    },
    materialSwitch2: {
        width: 65,
        height: 43,
        marginTop: 17
    },
    materialSwitch3: {
        width: 65,
        height: 43,
        marginTop: 17
    },
    materialSwitch4: {
        width: 65,
        height: 43,
        marginTop: 17
    },
    materialSwitchColumn: {
        width: 45,
        marginLeft: 120,
        marginTop: 8,
        marginBottom: 9
    },
    iluminacaoGeralStackStackRow: {
        height: 160,
        flexDirection: "row",
        marginTop: 51,
        marginLeft: 57,
        marginRight: 88
    },

    titulo:{
        alignSelf: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: hp('5%'),
        color: '#ffffff'
    },

});

AppRegistry.registerComponent('TesteSwitch', () => TesteSwitch);
