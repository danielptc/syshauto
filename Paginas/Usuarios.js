import React from 'react';
import {ScrollView, View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Usuarios extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View>
                    <Text style={styles.titulo} > Usuarios </Text>
                </View>

                <ScrollView horizontal>

                    <View  style={styles.boxSmall}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CadastroUsuario')}>
                            <Image style={styles.centerImg}
                                   source={require('../image/addUser_w.png')}/>
                            <Text style={styles.centerText}> Add Usuario </Text>
                        </TouchableOpacity>
                    </View>

                    <View  style={styles.boxSmall}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('EditarUsuario')}>
                            <Image style={styles.centerImg}
                                   source={require('../image/edit_w.png')}/>
                            <Text style={styles.centerText}> Editar Usuario </Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>

                <ScrollView horizontal>

                    <View  style={styles.boxSmall}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ApagarUsuario')}>
                            <Image style={styles.centerImg}
                                   source={require('../image/delete_w.png')}
                                //onPress
                            />
                            <Text style={styles.centerText}> Apagar Usuario </Text>
                        </TouchableOpacity>
                    </View>

                    <View  style={styles.boxSmall}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('VerUsuarios')}>
                            <Image style={styles.centerImg}
                                   source={require('../image/log_w.png')}/>
                            <Text style={styles.centerText}> Ver Usuários </Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>


            </ScrollView>
        )
    }
}
Usuarios.navigationOptions = {
    title: 'Usuarios',
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
        fontSize: hp('2.5%'),
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
