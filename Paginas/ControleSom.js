import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import {endereco, iluminacao} from "./TesteComponente";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class ControleSom extends React.Component {
    constructor(props) {
        super(props);

        this.fPower = this.fPower.bind(this)
        this.fModo = this.fModo.bind(this)
        this.fMudo = this.fMudo.bind(this)
        this.fPlay = this.fPlay.bind(this)
        this.fAnterior = this.fAnterior.bind(this)
        this.fProximo = this.fProximo.bind(this)
        this.fScan = this.fScan.bind(this)
        this.fVMenos = this.fVMenos.bind(this)
        this.fVMais = this.fVMais.bind(this)
    }

    fPower(){
    }

    fModo(){

    }

    fMudo(){

    }

    fPlay(){


    }

    fAnterior(){


    }

    fProximo(){


    }

    fScan(){


    }

    fVMenos(){


    }

    fVMais(){


    }

render() {
    return (
        <View style={styles.container}>
            <View style={styles.rect}>
                <View>
                    <Text style={styles.titulo} > Controle do Som </Text>
                </View>
                <View style={styles.powerColumnRow}>
                    <View style={styles.powerColumn}>
                        <TouchableOpacity  onPress={ () => this.fPower()}>
                        <FeatherIcon name="power" style={styles.power} />
                        </TouchableOpacity>
                        <Text style={styles.power3}>Power</Text>
                    </View>

                    <View style={styles.modoColumn}>
                        <TouchableOpacity  onPress={ () => this.fModo()}>
                        <FontAwesomeIcon name="usb" style={styles.modo} />
                        </TouchableOpacity>
                        <Text style={styles.modo2}>Modo de Operação</Text>
                    </View>

                    <View style={styles.muteStack}>
                        <TouchableOpacity  onPress={ () => this.fMudo()}>
                        <MaterialCommunityIconsIcon name="volume-off" style={styles.mute} />
                        </TouchableOpacity>
                        <Text style={styles.mudo}>Mudo</Text>
                    </View>
                </View>

                <View style={styles.playPauserRow}>
                    <TouchableOpacity  onPress={ () => this.fPlay()}>
                    <MaterialCommunityIconsIcon name="play-pause" style={styles.playPauser}/>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={ () => this.fAnterior()}>
                    <EntypoIcon name="controller-fast-backward" style={styles.voltar} />
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={ () => this.fProximo()}>
                    <EntypoIcon name="controller-fast-forward" style={styles.adiantar} />
                    </TouchableOpacity>
                </View>
                <View style={styles.playPause3Row}>
                    <Text style={styles.playPause3}>Play/Pause</Text>
                    <Text style={styles.anterior}>Anterior</Text>
                    <Text style={styles.proximo}>Próximo</Text>
                </View>

                <View style={styles.scanerRow}>
                    <TouchableOpacity  onPress={ () => this.fScan()}>
                    <MaterialCommunityIconsIcon name="backup-restore" style={styles.scaner} />
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={ () => this.fVMenos()}>
                    <EntypoIcon name="circle-with-minus" style={styles.menos} />
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={ () => this.fVMais()}>
                    <EntypoIcon name="circle-with-plus" style={styles.mais} />
                    </TouchableOpacity>
                </View>
                <View style={styles.scan2Row}>
                    <Text style={styles.scan2}>Scan</Text>
                    <Text style={styles.volumeMenos}>Volume Menos</Text>
                    <Text style={styles.volumeMais}>Volume Mais</Text>
                </View>
            </View>
        </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,1)"
    },
    rect: {
        width: 375,
        height: 600,
        backgroundColor: "rgba(0,0,0,1)",
        borderRadius: 22,
        borderColor: "rgba(255,255,255,1)",
        borderWidth: 4,
        marginTop: 71,
        marginLeft: 18
    },
    titulo:{
        alignSelf: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: hp('5%'),
        color: '#ffffff'
    },
    power: {
        color: "rgba(255,255,255,1)",
        fontSize: 74,
        height: 74,
        width: 74
    },
    power3: {
        color: "rgba(255,255,255,1)",
        marginTop: 12,
        marginLeft: 17
    },
    powerColumn: {
        width: 74
    },
    modo: {
        color: "rgba(255,255,255,1)",
        fontSize: 74,
        height: 74,
        width: 95
    },
    modo2: {
        color: "rgba(255,255,255,1)",
        marginTop: 6,
        marginLeft: 30
    },
    modoColumn: {
        width: 95,
        marginLeft: 43,
        marginTop: 6
    },
    mute: {

        color: "rgb(255,255,255)",
        fontSize: 86,
        height: 86,
        width: 86
    },
    mudo: {
        top: 86,
        left: 25,
        color: "rgba(255,255,255,1)",
        position: "absolute",
    },
    muteStack: {
        width: 86,
        height: 100,
        marginLeft: 26
    },
    powerColumnRow: {
        height: 100,
        flexDirection: "row",
        marginTop: 36,
        marginLeft: 27,
        marginRight: 32
    },
    playPauser: {
        color: "rgba(255,255,255,1)",
        fontSize: 74,
        height: 74,
        width: 74
    },
    voltar: {
        color: "rgba(255,255,255,1)",
        fontSize: 74,
        height: 74,
        width: 74,
        marginLeft: 43
    },
    adiantar: {
        color: "rgba(255,255,255,1)",
        fontSize: 74,
        height: 74,
        width: 74,
        marginLeft: 53
    },
    playPauserRow: {
        height: 74,
        flexDirection: "row",
        marginTop: 34,
        marginLeft: 27,
        marginRight: 38
    },
    playPause3: {
        color: "rgba(255,255,255,1)",
    },
    anterior: {
        color: "rgba(255,255,255,1)",
        marginLeft: 52
    },
    proximo: {
        color: "rgba(255,255,255,1)",
        marginLeft: 64
    },
    playPause3Row: {
        height: 14,
        flexDirection: "row",
        marginTop: 20,
        marginLeft: 34,
        marginRight: 60
    },
    scaner: {
        color: "rgba(255,255,255,1)",
        fontSize: 86,
        height: 86,
        width: 86
    },
    menos: {
        color: "rgba(255,255,255,1)",
        fontSize: 86,
        height: 86,
        width: 86,
        marginLeft: 36
    },
    mais: {
        color: "rgba(255,255,255,1)",
        fontSize: 86,
        height: 86,
        width: 86,
        marginLeft: 30
    },
    scanerRow: {
        height: 86,
        flexDirection: "row",
        marginTop: 28,
        marginLeft: 27,
        marginRight: 32
    },
    scan2: {
        color: "rgba(255,255,255,1)",
        fontSize: 16
    },
    volumeMenos: {
        color: "rgba(255,255,255,1)",
        marginLeft: 66,
        fontSize: 16
    },
    volumeMais: {
        color: "rgba(255,255,255,1)",
        marginLeft: 29,
        fontSize: 16

    },
    scan2Row: {
        height: 20,
        flexDirection: "row",
        marginTop: 12,
        marginLeft: 35,
        marginRight: 35
    }
});

