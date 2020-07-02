import React from 'react'
import {ScrollView, StatusBar, Dimensions, Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { BarChart } from 'react-native-chart-kit'
import { data } from './DadosEscritorio'
import 'babel-polyfill'
import {controleDataShow} from './TesteComponente';
import ligarLed from "./ligarLed";
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


export default class Quarto extends React.Component {

    legarDesligar() {
        controleDataShow.ligarDataShow()
    }

    congelar() {
        controleDataShow.congelarDataShow()
    }

    automatico() {
        controleDataShow.AutomaticoDataShow()
    }

    video() {
        controleDataShow.VideoDataShow()
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
                            <Text style={labelStyle}>Consumo de Energia no Quarto</Text>
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
                                        <Text style={styles.ValorTemperatura}>28</Text>
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
                                        <Text style={styles.ValorTemperatura}>20</Text>
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
                                        <TouchableOpacity >
                                            <MaterialCommunityIconsIcon
                                                name="power"
                                                style={styles.Desliga_Ar}
                                            />
                                        </TouchableOpacity>

                                        <TouchableOpacity >
                                            <MaterialCommunityIconsIcon
                                                name="power"
                                                style={styles.Liga_Ar}
                                            />
                                        </TouchableOpacity>

                                        <TouchableOpacity >
                                            <MaterialCommunityIconsIcon
                                                name="plus-circle"
                                                style={styles.Aumentar}
                                            />
                                        </TouchableOpacity>

                                        <TouchableOpacity >
                                            <MaterialCommunityIconsIcon
                                                name="minus-circle"
                                                style={styles.diminuir}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        </ScrollView>

                    )
                })}

            </ScrollableTabView>
        )
    }
}

Quarto.navigationOptions = {
    title: 'Quarto',
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,1)",
        opacity: 1,
        borderRadius: 6
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
        width: 345,
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
        fontSize: 30,
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
        width: 345,
        height: 150,
        backgroundColor: "rgba(0,0,0,1)",
        borderRadius: 31,
        borderColor: "rgba(255,255,255,1)",
        borderWidth: 4,
        marginTop: 3.91,
        marginLeft: 26
    },
    Tomada01: {
        color: "rgba(26, 255, 146,1)",
        fontSize: 30,
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
        fontSize: 30,
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

    Temperatura: {
        width: 375,
        height: 400,
        backgroundColor: "rgba(0,0,0,1)",
        borderRadius: 31,
        borderColor: "rgba(255,255,255,1)",
        borderWidth: 4,
        marginTop: 5,
        marginLeft: 29
    },




});





