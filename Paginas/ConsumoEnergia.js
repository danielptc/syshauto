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
import { ConsumoMes, ConsumoDia, ConsumoSemana, ConsumoCasa } from './DadosEnergia'
import 'babel-polyfill'
import TesteSwitch from "./TesteSwitch";

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
    }
]

export default class ConsumoEnergia extends React.Component {
    renderTabBar() {
        return <StatusBar animated/>
    }
    render() {
        const width = Dimensions.get('window').width
        const height = 290
        return (
            <ScrollableTabView renderTabBar={this.renderTabBar}>
                {chartConfigs.map(chartConfig => {
                    const labelStyle = {
                        color: chartConfig.color(),
                        marginVertical: 10,
                        textAlign: 'center',
                        fontSize: 25
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
                            <Text style={labelStyle}>Consumo de Energia da Casa (W)</Text>
                            <BarChart
                                width={width}
                                height={height}
                                data= {ConsumoCasa}
                                chartConfig={chartConfig}
                                style={graphStyle}
                            />

                            <Text style={labelStyle}>Consumo de Energia Diário (W)</Text>
                            <LineChart
                                data={ConsumoDia}
                                width={width}
                                height={height}
                                chartConfig={chartConfig}
                                bezier
                                style={graphStyle}
                            />

                            <Text style={labelStyle}>Consumo de Energia Semanal (W)</Text>
                            <LineChart
                                data={ConsumoSemana}
                                width={width}
                                height={height}
                                chartConfig={chartConfig}
                                bezier
                                style={graphStyle}
                            />

                            <Text style={labelStyle}>Consumo de Energia Mensal (KWh)</Text>
                            <LineChart
                                data={ConsumoMes}
                                width={width}
                                height={height}
                                chartConfig={chartConfig}
                                bezier
                                style={graphStyle}
                            />

                        </ScrollView>
                    )
                })}
            </ScrollableTabView>
        )
    }
}

ConsumoEnergia.navigationOptions = {
    title: 'Consumo de Energia Elétrica',
}
