import React from 'react'
import {ScrollView, StatusBar, Dimensions, Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { BarChart } from 'react-native-chart-kit'
import { data } from './DadosEscritorio'
import 'babel-polyfill'
import {controleAr, controleSom, iluminacao} from './TesteComponente';
import ControleSom from "./ControleSom";
import Child from "./Child";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
const chartConfigs = [

    {
        backgroundColor: '#000000',
        backgroundGradientFrom: '#1d2229',
        backgroundGradientTo: '#060f13',
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        style: {
            borderRadius: 16
        }
    },
]

export default class sala extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            temperatura: 22
        };

        this.diminuirTemperatura = this.diminuirTemperatura.bind(this)
        this.aumentarTemperatura = this.aumentarTemperatura.bind(this)

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

    ligarAr() {
    controleAr.ligarAr()
    }

    desligarAr() {
    controleAr.desligarAr()
    }

    diminuirTemperatura () {
    controleAr.diminuirTemperatura()
    }

    aumentarTemperatura () {
    controleAr.aumentarTemperatura()
    }

    fPower(){
        controleSom.LigarSom()
    }

    fModo(){
        controleSom.modoOperacao()
    }

    fMudo(){
        controleSom.semSom()
    }

    fPlay(){
        controleSom.playPause()
    }

    fAnterior(){
        controleSom.anteriorSom()
    }

    fProximo(){
        controleSom.proximoSom()
    }

    fScan(){
        controleSom.scanSom()
    }

    fVMenos(){
        controleSom.VolumeMenos()
    }

    fVMais(){
        controleSom.VolumeMais()
    }


    renderTabBar() {
        return <StatusBar animated/>
    }
    render() {
        const width = Dimensions.get('window').width
        const height = 160
        return (
            <ScrollableTabView renderTabBar={this.renderTabBar}>
                {chartConfigs.map(chartConfig => {
                    const labelStyle = {
                        color: chartConfig.color(),
                        marginVertical: 10,
                        textAlign: 'center',
                        fontSize: 24
                    }
                    const graphStyle = {
                        marginVertical: 4,
                        ...chartConfig.style
                    }
                    return (
                        <ScrollView
                            key={Math.random()}
                            style={{
                                backgroundColor: chartConfig.backgroundColor
                            }}
                        >
                            <Text style={labelStyle}>Consumo de Energia na Sala</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ConsumoEnergia')}>
                                <BarChart
                                    width={width}
                                    height={height}
                                    data={data}
                                    chartConfig={chartConfig}
                                    style={graphStyle}
                                />
                            </TouchableOpacity>

                            <View style={styles.container}>
                                <View style={styles.Temperatura}>
                                    <Text style={labelStyle}> Temperatura Atual </Text>
                                    <View
                                        style={[
                                            styles.row,
                                            {
                                                marginTop: 5.15,
                                                marginLeft: 40.67,
                                                marginRight: 45.43,
                                                height: 73
                                            }
                                        ]}
                                    >
                                        <MaterialCommunityIconsIcon
                                            name="thermometer-lines"
                                            style={styles.Termometro}
                                        />
                                        <Text style={styles.ValorTemperatura}>29</Text>
                                        <MaterialCommunityIconsIcon
                                            name="temperature-celsius"
                                            style={styles.graus}
                                        />
                                    </View>
                                    <Text style={labelStyle}> Temperatura Desejada </Text>
                                    <View
                                        style={[
                                            styles.row,
                                            {
                                                marginTop: 5.15,
                                                marginLeft: 40.67,
                                                marginRight: 45.43,
                                                height: 73
                                            }
                                        ]}
                                    >
                                        <MaterialCommunityIconsIcon
                                            name="thermometer-lines"
                                            style={styles.Termometro}
                                        />
                                        <Text style={styles.ValorTemperatura}>22</Text>
                                        <MaterialCommunityIconsIcon
                                            name="temperature-celsius"
                                            style={styles.graus}
                                        />
                                    </View>
                                    <View
                                        style={[
                                            styles.row,
                                            {
                                                marginTop: 35.71,
                                                marginLeft: 30.67,
                                                marginRight: 45.43,
                                                height: 70
                                            }
                                        ]}
                                    >
                                        <TouchableOpacity onPress={this.ligarAr}>
                                            <MaterialCommunityIconsIcon
                                                name="power"
                                                style={styles.Desligar}
                                            />
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={this.desligarAr}>
                                            <MaterialCommunityIconsIcon
                                                name="power"
                                                style={styles.Liga_desliga}
                                            />
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={ () => this.aumentarTemperatura()}>
                                            <MaterialCommunityIconsIcon
                                                name="plus-circle"
                                                style={styles.Aumentar}
                                            />
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={ () => this.diminuirTemperatura()}>
                                            <MaterialCommunityIconsIcon
                                                name="minus-circle"
                                                style={styles.diminuir}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>


                            <View style={styles.rectSom}>
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
                                        <Text style={styles.modo2}>Modo</Text>
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


                            <View style={styles.BoxPrincipal}>
                                <Text style={styles.TituloDataShow}> Controle DataShow </Text>


                                <TouchableOpacity style={styles.ligar} onPress={this.legarDesligar}>
                                    <Text style={styles.LigarDesligar}>Ligar / Desligar</Text>
                                </TouchableOpacity>
                                <View
                                    style={[
                                        styles.row,
                                        {
                                            marginTop: 25,
                                            marginLeft: 10,
                                            marginRight: 11,
                                            height: 46
                                        }
                                    ]}
                                >
                                    <TouchableOpacity style={styles.congelar} onPress={this.congelar}>
                                        <Text style={styles.CongelarTxt}>Congelar</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.automatico} onPress={this.automatico}>
                                        <Text style={styles.automaticoTxt}>Automático</Text>
                                    </TouchableOpacity>
                                </View>

                                <TouchableOpacity style={styles.video} onPress={this.video}>
                                    <Text style={styles.VideoInput}>Vídeo Input</Text>
                                </TouchableOpacity>



                            </View>



                            <View style={styles.rectEnergia}>
                                <View>
                                    <Text style={styles.titulo} > Controle de Energia </Text>
                                </View>

                                <TouchableOpacity style = {styles.submitButton} onPress={() => this.props.navigation.navigate('TesteSwitch')} >
                                    <Text style = {styles.submitButtonText}> Acessar controle de energia</Text>
                                </TouchableOpacity>

                            </View>



                        </ScrollView>

                    )
                })}

            </ScrollableTabView>


        );
    }
}

sala.navigationOptions = {
    title: 'Sala',
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,1)",
        opacity: 1,
        borderRadius: 6
    },
    Temperatura: {
        width: 375,
        height: 400,
        backgroundColor: "rgba(0,0,0,1)",
        borderRadius: 22,
        borderColor: "rgba(255,255,255,1)",
        borderWidth: 4,
        marginTop: 20,
        marginLeft: 18
    },
    row: {
        flexDirection: "row"
    },
    Termometro: {
        color: "rgba(80,227,194,1)",
        fontSize: 60,
        height: 60,
        width: 60,
        marginLeft: -0.17,
        marginTop: 12.93
    },
    ValorTemperatura: {
        color: "rgb(155,155,155)",
        fontSize: 66,
        marginLeft: 32,
        marginTop: -0.07
    },
    graus: {
        color: "grey",
        fontSize: 70,
        height: 70,
        width: 70,
        marginLeft: 22.87,
        marginTop: 2.93
    },
    Liga_desliga: {
        color: "rgba(36,244,0,1)",
        fontSize: 70,
        height: 70,
        width: 70,
        marginLeft: -0.17,
        marginTop: 0.22
    },
    Desligar: {
        color: "rgba(155,155,155,0.78)",
        fontSize: 70,
        height: 70,
        width: 70,
        marginLeft: -0.17,
        marginTop: 0.22
    },
    Aumentar: {
        color: "rgba(255,13,13,1)",
        fontSize: 70,
        height: 70,
        width: 70,
        marginLeft: 5,
        marginTop: 0.22
    },
    diminuir: {
        color: "rgba(46,49,205,1)",
        fontSize: 70,
        height: 70,
        width: 70,
        marginLeft: 5,
        marginTop: 0.22
    },
    Energia: {
        width: 375,
        height: 150,
        backgroundColor: "rgba(0,0,0,1)",
        borderRadius: 31,
        borderColor: "rgba(255,255,255,1)",
        borderWidth: 4,
        marginTop: 12.77,
        marginLeft: 26
    },
    Iluminacao: {
        color: "rgba(26, 255, 146, 1)",
        fontSize: 20,
        marginTop: 15.67,
        marginLeft: 98.88
    },
    StatusLampada: {
        color: "rgb(38,135,42)",
        fontSize: 28,
        marginLeft: -0.26,
        marginTop: 18.84
    },
    lampada: {
        width: 138,
        height: 64,
        marginLeft: 30.17,
        marginTop: -0.16
    },
    rect: {
        width: 375,
        height: 150,
        backgroundColor: "rgba(0,0,0,1)",
        borderRadius: 31,
        borderColor: "rgba(255,255,255,1)",
        borderWidth: 4,
        marginTop: 3.91,
        marginLeft: 26
    },
    rectSom: {
        width: 375,
        height: 600,
        backgroundColor: "rgba(0,0,0,1)",
        borderRadius: 22,
        borderColor: "rgba(255,255,255,1)",
        borderWidth: 4,
        marginTop: 20,
        marginLeft: 18
    },
    rectEnergia: {
        width: 375,
        height: 160,
        backgroundColor: "rgba(0,0,0,1)",
        borderRadius: 22,
        borderColor: "rgba(255,255,255,1)",
        borderWidth: 4,
        marginTop: 20,
        marginLeft: 18
    },
    Tomada01: {
        color: "rgba(26, 255, 146,1)",
        fontSize: 20,
        marginTop: 23.04,
        marginLeft: 101.88
    },
    StatusTomada01: {
        color: "rgb(38,135,42)",
        fontSize: 28,
        marginLeft: -0.26,
        marginTop: 6.89
    },
    Ligada: {
        width: 63,
        height: 44,
        marginLeft: 65.17,
        marginTop: -0.11
    },
    rect2: {
        width: 345,
        height: 150,
        backgroundColor: "rgba(0,0,0,1)",
        borderRadius: 31,
        borderColor: "rgba(255,255,255,1)",
        borderWidth: 4,
        marginTop: 4.91,
        marginLeft: 26
    },
    Tomada02: {
        color: "rgba(26, 255, 146,1)",
        fontSize: 20,
        marginTop: 9.77,
        marginLeft: 103
    },
    StatusTomada02: {
        color: "rgba(255,0,0,1)",
        fontSize: 28,
        marginLeft: 0.03,
        marginTop: 12.17
    },
    Deligada: {
        width: 88,
        height: 46,
        marginLeft: 28.81,
        marginTop: 0.17
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
        marginLeft: 17,
        fontSize: 18,
    },
    powerColumn: {
        width: 74
    },
    modo: {
        color: "rgba(255,255,255,1)",
        fontSize: 74,
        height: 74,
        width: 95,
    },
    modo2: {
        color: "rgba(255,255,255,1)",
        marginTop: 6,
        marginLeft: 30,
        fontSize: 18,
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
        fontSize: 18,
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
        fontSize: 18,
    },
    anterior: {
        color: "rgba(255,255,255,1)",
        marginLeft: 52,
        fontSize: 18,
    },
    proximo: {
        color: "rgba(255,255,255,1)",
        marginLeft: 64,
        fontSize: 18,
    },
    playPause3Row: {
        height: 40,
        flexDirection: "row",
        marginTop: 20,
        marginLeft: 15,
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
    },
    Desliga: {
        color: "rgb(155,155,155)",
        fontSize: 70,
        height: 70,
        width: 70,
        marginLeft: -0.17,
        marginTop: 0.22
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
        justifyContent: 'center',
    },


    ligar: {
        width: 165,
        height: 46,
        backgroundColor: "rgba(74,144,226,1)",
        borderRadius: 30,
        marginTop: 15,
        marginLeft: 109
    },
    LigarDesligar: {
        color: "#121212",
        fontSize: 20,
        marginTop: 11,
        marginLeft: 21
    },
    congelar: {
        width: 165,
        height: 46,
        backgroundColor: "rgb(255,255,255)",
        borderRadius: 30
    },
    CongelarTxt: {
        color: "#121212",
        fontSize: 20,
        marginTop: 11,
        marginLeft: 50
    },
    automatico: {
        width: 165,
        height: 46,
        backgroundColor: "rgba(230, 230, 230,1)",
        borderRadius: 30,
        marginLeft: 15
    },
    automaticoTxt: {
        color: "#121212",
        fontSize: 20,
        marginTop: 11,
        marginLeft: 38
    },
    video: {
        width: 165,
        height: 46,
        backgroundColor: "rgba(248,231,28,1)",
        borderRadius: 30,
        marginTop: 22,
        marginLeft: 109
    },
    VideoInput: {
        color: "#121212",
        fontSize: 20,
        marginTop: 13,
        marginLeft: 38
    },
    TituloDataShow: {
        color: "#ff0013",
        fontSize: 30,
        marginVertical: 10,
        textAlign: 'center',
    },
    BoxPrincipal: {
        width: 380,
        height: 340,
        backgroundColor: "rgba(0,0,0,1)",
        borderRadius: 31,
        borderColor: "rgba(255,255,255,1)",
        borderWidth: 6,
        marginTop: 5,
        marginLeft: 20,
        marginRight: 30
    },

});
