import React from 'react'
import {ScrollView, StatusBar, Dimensions, Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
} from 'react-native-chart-kit'
import { data, contributionData, pieChartData, progressChartData } from './DadosEscritorio'
import 'babel-polyfill'
import Consumo from "./Consumo";
import {iluminacao} from "./TesteComponente";

// in Expo - swipe left to see the following styling, or create your own
const chartConfigs = [

    {
        backgroundColor: '#000000',
        backgroundGradientFrom: '#1E2923',
        backgroundGradientTo: '#08130D',
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        style: {
            borderRadius: 16
        }
    },


]

export default class Escritorio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            StsIluminacao: "Ligado",
            StsTomada01: 'Ligado',
            StsTomada02: "Desligado",

        };

        this.fLigaLuz = this.fLigaLuz.bind(this)
        this.fDesligaLuz = this.fDesligaLuz.bind(this)
        this.fLigaTomada01 = this.fLigaTomada01.bind(this)
        this.fDesligaTomada01 = this.fDesligaTomada01.bind(this)
        this.fLigaTomada02 = this.fLigaTomada02.bind(this)
        this.fDesligaTomada02 = this.fDesligaTomada02.bind(this)

    }

    fLigaLuz(){

        this.setState({
            imgDorm01: require('../image/lampada_cinza.png'),
        });
        iluminacao.desligaDormi01()


    }



    fDesligaLuz() {

        this.setState({
            imgDorm01: require('../image/lampada_Amarelo.png'),
        });
        iluminacao.ligaDormi01()

    }

    fLigaTomada01() {
    }

    fDesligaTomada01(){

    }

    fLigaTomada02(){

    }

    fDesligaTomada02(){


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

                            <Text style={labelStyle}>Consumo de Energia no Escritório</Text>
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

                                <View style={styles.Energia}>
                                    <Text style={styles.Iluminacao}>Iluminação</Text>
                                    <View
                                        style={[
                                            styles.row,
                                            {
                                                marginTop: 7.16,
                                                marginLeft: 61.14,
                                                marginRight: 31.75,
                                                height: 64.26
                                            }
                                        ]}
                                    >
                                        <Text style={styles.StatusLampada}>{ this.state.StsIluminacao }</Text>

                                        <TouchableOpacity onPress={this.fLigaLuz}>
                                            <MaterialCommunityIconsIcon
                                                name="power"
                                                style={styles.Liga_desliga}
                                            />
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={this.fDesligaLuz}>
                                            <MaterialCommunityIconsIcon
                                                name="power"
                                                style={styles.Desliga}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.rect}>
                                    <Text style={styles.Tomada01}>Tomada 01</Text>
                                    <View
                                        style={[
                                            styles.row,
                                            {
                                                marginTop: 15.11,
                                                marginLeft: 61.14,
                                                marginRight: 72.5,
                                                height: 43.89
                                            }
                                        ]}
                                    >
                                        <Text style={styles.StatusTomada01}>{ this.state.StsTomada01 }</Text>
                                        <TouchableOpacity >
                                            <MaterialCommunityIconsIcon
                                                name="power"
                                                style={styles.Liga_desliga}
                                            />
                                        </TouchableOpacity>

                                        <TouchableOpacity >
                                            <MaterialCommunityIconsIcon
                                                name="power"
                                                style={styles.Desliga}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.rect2}>
                                    <Text style={styles.Tomada02}>Tomada 02</Text>
                                    <View
                                        style={[
                                            styles.row,
                                            {
                                                marginTop: 9.83,
                                                marginLeft: 61.97,
                                                marginRight: 42.93,
                                                height: 46.27
                                            }
                                        ]}
                                    >
                                        <Text style={styles.StatusTomada02}>{ this.state.StsTomada02 }</Text>
                                        <TouchableOpacity onPress={ () => this.fLigaTomada02()}>
                                            <MaterialCommunityIconsIcon
                                                name="power"
                                                style={styles.Liga_desliga}
                                            />
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={ () => this.fDesligaTomada02()}>
                                            <MaterialCommunityIconsIcon
                                                name="power"
                                                style={styles.Desliga}
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

Escritorio.navigationOptions = {
    title: 'Ecritório',
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,1)",
        opacity: 1,
        borderRadius: 6
    },
    Temperatura: {
        width: 345,
        height: 400,
        backgroundColor: "rgba(0,0,0,1)",
        borderRadius: 31,
        borderColor: "rgba(255,255,255,1)",
        borderWidth: 4,
        marginTop: 5,
        marginLeft: 29
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
        color: "rgba(155,155,155,1)",
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
        color: "rgb(244,237,51)",
        fontSize: 70,
        height: 70,
        width: 70,
        marginLeft: -0.17,
        marginTop: 0.22
    },
    Liga_Ar: {
        color: "rgb(57,249,66)",
        fontSize: 70,
        height: 70,
        width: 70,
        marginLeft: -0.17,
        marginTop: 0.22
    },
    Desliga_Ar: {
        color: "rgb(255,0,19)",
        fontSize: 70,
        height: 70,
        width: 70,
        marginLeft: -0.17,
        marginTop: 0.22
    },
    Desliga: {
        color: "rgb(155,155,155)",
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
    }
});
