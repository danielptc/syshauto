import React from 'react';
import {StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Consumo extends React.Component {
    render() {
        return (

            <ScrollView style={styles.container}
                        contentContainerStyle={styles.content}
            >
                <View>
                    <Text style={styles.titulo} > Consumo </Text>
                </View>


                <ScrollView horizontal>

                    <View  style={styles.boxSmall}
                    >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ConsumoAgua')}>
                            <Image style={styles.centerImg}
                                   source={require('../image/agua03_w.png')}
                                //onPress
                            />
                            <Text style={styles.centerText}> Água </Text>
                        </TouchableOpacity>
                    </View>

                    <View  style={styles.boxSmall}
                    >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ConsumoEnergia')}>
                            <Image style={styles.centerImg}
                                   source={require('../image/energia_w.png')}/>
                            <Text style={styles.centerText}> Energia  </Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>

                <ScrollView horizontal>

                    <View  style={styles.boxSmall}
                    >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('MODELOS_GRAFICOS')}>
                            <Image style={styles.centerImg}
                                   source={require('../image/relatorio_w.png')}
                                //onPress
                            />
                            <Text style={styles.centerText}> Relatório </Text>
                        </TouchableOpacity>
                    </View>

                    <View  style={styles.boxSmall}
                    >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('adefinir')}>
                            <Image style={styles.centerImg}
                                   source={require('../image/settings_w.png')}/>
                            <Text style={styles.centerText}> Ajustes Consumo </Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>

            </ScrollView>
        )
    }
}

Consumo.navigationOptions = {
    title: 'Consumo',
}

const styles = StyleSheet.create({
    boxSmall: {
        width: wp('40%'),
        height: hp('23%'),
        marginBottom: 30,
        marginRight: 20,
        marginLeft: 20,
        backgroundColor: 'rgb(0,0,0)',
        borderRadius: 20,
        //padding: 16,
    },
    centerText:{
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: hp('3%'),
        color: '#fff'
    },
    centerImg:{
        width: wp('30%'),
        height: hp('16%'),
        marginBottom: 20,
        marginRight: 5,
        marginLeft: 20,

    },
    titulo:{
        alignSelf: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: hp('8%'),
        color: '#ff7700'
    },
    container: {
        flex: 1,
        height: hp('100%'), // 70% of height device screen
        width: wp('100%'),
        backgroundColor: '#000000',
        //flex: 1,
        //paddingTop: 24,
        //backgroundColor: 'white'
    },

    textWrapper: {
        height: hp('20%'), // 70% of height device screen
        width: wp('80%')   // 80% of width device screen
    },
    content: {
        // not cool but good enough to make all inputs visible when keyboard is active
        paddingBottom: 300,
    },
    card2: {
        padding: 16,
    },
});
