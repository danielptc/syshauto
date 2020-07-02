import React from 'react';

import {
    AppRegistry,
    StyleSheet,
    ActivityIndicator,
    ListView,
    Text,
    View,
    Alert,
    FlatList,
    TouchableOpacity,
    Button,
    TextInput, ScrollView
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {endereco} from './TesteComponente';
import {Fumi} from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";


export default class TesteFor extends React.Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true, contador: 'falso'}
    }

    componentDidMount(){
        return fetch(endereco.enderecoUsuario)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.content,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }




    //handling onPress action
    getListViewItem = (item) => {
        /*
        if (item.key == 'Ajax'){
            Alert.alert('esta no if')
        }*/

        for (let i=0; i <= this.state.dataSource.length; i++) {
            if (item.nome === this.user)  {

                Alert.alert("Sucesso!")

                //for (let i=0; i <= this.state.dataSource.length; i++) {

                    //if (item.senha != this.password) {


                        //this.props.navigation.navigate('Home')
                  //  }

            //}
            }


            else {
            Alert.alert(item.nome)

            }
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View>
                    <Text style={styles.titulo} > SysHauto </Text>
                </View>

                <View style={[styles.card2, { backgroundColor: '#9b9b9b' }]}>
                    <Text style={styles.title}>Fazer Login </Text>
                    <Fumi
                        data={this.state.dataSource}
                        style={styles.input}
                        label={'Usuario'}
                        iconClass={FontAwesomeIcon}
                        iconName={'user'}
                        iconColor={'#231f77'}
                        onChangeText={(item) => this.user = item}

                    />

                    <Fumi
                        data={this.state.dataSource}
                        style={styles.input}
                        label={'Senha'}
                        iconClass={FontAwesomeIcon}
                        iconName={'key'}
                        iconColor={'#060f13'}
                        onChangeText={(text) => this.password = text}

                    />

                </View>

                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) =>
                        <TouchableOpacity style = {styles.submitButton} onPress={this.getListViewItem.bind(this, item)}>
                            <Text style = {styles.submitButtonText}> {item.nome}, {item.dataNascimento}</Text>
                        </TouchableOpacity>

                    }
                    //ItemSeparatorComponent={this.renderSeparator}
                />



                <TouchableOpacity style = {styles.submitButton} onPress={this.getListViewItem.bind()}>

                <Text style = {styles.submitButtonText}> Entrar </Text>

                </TouchableOpacity>

            </View>
        );




}


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginTop: 100
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    submitButton: {
        backgroundColor: '#3a32ff',
        padding: 10,
        margin: 5,
        marginTop: 3,
        borderRadius: 10,
        width: wp('97%'),
        height: hp('7%'),

    },
    titulo:{
        alignSelf: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: hp('10%'),
        color: '#ff7700'
    },
    submitButtonText:{
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: hp('3%'),
        textAlign: 'center',
    },

    content: {
        // not cool but good enough to make all inputs visible when keyboard is active
        paddingBottom: 300,
    },
    card1: {
        paddingVertical: 16,
    },
    card2: {
        padding: 16,
    },
    input: {
        marginTop: 4,
    },
    title: {
        paddingBottom: 16,
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 30,
        fontWeight: 'bold',
    },
})


AppRegistry.registerComponent('AwesomeProject', () => TesteFor);
