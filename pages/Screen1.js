//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
// import all basic components

export default class Screen1 extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>

                <ScrollView horizontal>

                    <View  style={styles.boxSmall}>
                        <Image style={styles.centerImg}
                               source={require('./image/home.png')}
                            //onPress
                        />
                        <Text style={styles.centerText}> Comodos </Text>
                    </View>

                    <View  style={styles.boxSmall}>
                        <Image style={styles.centerImg}
                               source={require('./image/Consumo.png')}/>
                        <Text style={styles.centerText}> Consumo </Text>
                    </View>

                </ScrollView>

                <ScrollView horizontal>

                    <View  style={styles.boxSmall}>
                        <Image style={styles.centerImg}
                               source={require('./image/Dispositivos.png')}
                            //onPress
                        />
                        <Text style={styles.centerText}> Dispositivos </Text>
                    </View>

                    <View  style={styles.boxSmall}>
                        <Image style={styles.centerImg}
                               source={require('./image/Equipamentos.png')}/>
                        <Text style={styles.centerText}> Equipamentos </Text>
                    </View>

                </ScrollView>

                <ScrollView horizontal>

                    <View  style={styles.boxSmall}>
                        <Image style={styles.centerImg}
                               source={require('./image/usuarios.png')}
                            //onPress
                        />
                        <Text style={styles.centerText}> Usuarios </Text>
                    </View>

                    <View  style={styles.boxSmall}>
                        <TouchableOpacity>
                            <Image style={styles.centerImg}
                                   source={require('./image/settings.png')}/>
                            <Text style={styles.centerText}> Ajustes </Text>

                        </TouchableOpacity>

                    </View>



                </ScrollView>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
    },
    boxSmall: {
        width: 170,
        height: 170,
        marginBottom: 30,
        marginRight: 20,
        marginLeft: 15,
        backgroundColor: 'rgba(175,177,179,0.28)',
        //alignSelf: 'center',
        //justifyContent: 'center',
    },
    centerText:{
        alignSelf: 'center',
        justifyContent: 'center',
    },
    centerImg:{
        alignSelf: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
    },
})
