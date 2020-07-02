import React from 'react';
import {Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class Equipamentos extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View>
                    <Text style={styles.titulo} > Equipamentos </Text>
                </View>

                <ScrollView horizontal>

                    <View  style={styles.boxSmall}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AbrirChamado')}>
                            <Image style={styles.centerImg}
                                   source={require('../image/email.png')}/>
                            <Text style={styles.centerText}> Abrir Chamado </Text>
                        </TouchableOpacity>
                    </View>

                    <View  style={styles.boxSmall}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('EditarEquipamentos')}>
                            <Image style={styles.centerImg}
                                   source={require('../image/edit_w.png')}/>
                            <Text style={styles.centerText}> Edit Equipamento </Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>

                <ScrollView horizontal>

                    <View  style={styles.boxSmall}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('VerEquipamentos')}>
                            <Image style={styles.centerImg}
                                   source={require('../image/equipamentos02_w.png')}/>
                            <Text style={styles.centerText}> Ver Equipamentos </Text>
                        </TouchableOpacity>
                    </View>

                    <View  style={styles.boxSmall}>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('TestePaginaComunicacao')}>
                            <Image style={styles.centerImg}
                                   source={require('../image/settings_w.png')}/>
                            <Text style={styles.centerText}> Conf Equipamentos </Text>

                        </TouchableOpacity>

                    </View>

                </ScrollView>


            </ScrollView>
        )
    }

}


Equipamentos.navigationOptions = {
    title: 'Equipamentos',
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
        fontSize: hp('2%'),
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
        fontSize: hp('7%'),
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
