import React from 'react'
import { ScrollView, StatusBar, Dimensions, Text } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
} from 'react-native-chart-kit'
import { data, ConsumoMes, ConsumoDia, ConsumoSemana  } from './DadosAgua'
import 'babel-polyfill'
import ConsumoEnergia from "./ConsumoEnergia";

// in Expo - swipe left to see the following styling, or create your own
const chartConfigs = [
    {
        backgroundColor: '#5970ff',
        backgroundGradientFrom: '#5970ff',
        backgroundGradientTo: '#5970ff',
        color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`,
        style: {
            borderRadius: 16
        }
    }
]

export default class ConsumoAgua extends React.Component {
    renderTabBar() {
        return <StatusBar animated/>
    }
    render() {
        const width = Dimensions.get('window').width
        const height = 220
        return (
            <ScrollableTabView renderTabBar={this.renderTabBar}>
                {chartConfigs.map(chartConfig => {
                    const labelStyle = {
                        color: chartConfig.color(),
                        marginVertical: 10,
                        textAlign: 'center',
                        fontSize: 16
                    }
                    const graphStyle = {
                        marginVertical: 8,
                        ...chartConfig.style
                    }
                    return (
                        <ScrollView
                            key={Math.random()}
                            style={{
                                backgroundColor: chartConfig.backgroundColor
                            }}
                        >

                            <Text style={labelStyle}>Consumo Diario de Água (m³)</Text>
                            <BarChart
                                width={width}
                                height={height}
                                data={ConsumoDia}
                                chartConfig={chartConfig}
                                style={graphStyle}
                            />
                            <Text style={labelStyle}>Consumo Semanal de Água (m³) </Text>
                            <BarChart
                                width={width}
                                height={height}
                                data={ConsumoSemana}
                                chartConfig={chartConfig}
                                style={graphStyle}
                            />

                            <Text style={labelStyle}> Consumo Mensal de Água (m³) </Text>
                            <BarChart
                                width={width}
                                height={height}
                                data={ConsumoMes}
                                chartConfig={chartConfig}
                                style={graphStyle}
                            />

                        </ScrollView>
                    )
                })}
            </ScrollableTabView>
        )
    }
}

ConsumoAgua.navigationOptions = {
    title: 'Consumo de Água',
}
