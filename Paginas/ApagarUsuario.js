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
    RefreshControl
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {endereco} from "./TesteComponente";

const url = endereco.enderecoUsuario

export default class ApagarUsuario extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            isLoading: true,
            data: "",
            refreshing: false,}

    }

    componentDidMount(){
        return fetch (endereco.enderecoUsuario)
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

    alerta = (item) => {


        Alert.alert(
            "Atenção!",
            "Deseja apagar o dispositivo " +item.nome+  "?",
            [
                //{ text: "Later", onPress: () => console.log("later pressed") },

                { text: "Não", onPress: () => console.log("Cancel Pressed"), style: "cancel" },

                { text: "Sim", onPress: () =>

                        fetch(`${endereco.enderecoUsuario}${item.id}`, {
                            method: 'DELETE',
                        },
                    this.pagina()
                        )

                }
            ],
            { cancelable: false }
        );

    }

    pagina(){

        Alert.alert("Sucesso!",
            "Usuário Deletado!")

        this.props.navigation.navigate('Usuarios')
    }

    render() {
        return (

            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) =>
                        <TouchableOpacity style = {styles.submitButton} onPress={this.alerta.bind(this, item)}>
                            <Text style = {styles.submitButtonText}>{item.nome} </Text>
                        </TouchableOpacity>
                    }
                />
            </View>
        );
    }
}

ApagarUsuario.navigationOptions = {
    title: 'Apagar Usuário',
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    submitButton: {
        backgroundColor: '#d65151',
        padding: 10,
        margin: 5,
        width: wp('99%'),
        height: hp('7%'),
        borderRadius: 10,
    },
    submitButtonText:{
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: hp('3%'),
    },
})


AppRegistry.registerComponent('AwesomeProject', () => ApagarUsuario);
