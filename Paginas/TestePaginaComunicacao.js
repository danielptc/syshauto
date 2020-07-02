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
    TouchableOpacity
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Dispositivo_Get, AdicionarDispositivo, endereco} from './TesteComponente';

export default class TestePaginaComunicacao extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            isLoading: true}
    }


    componentDidMount(){
        return fetch(endereco.enderecoDispositivos)
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


    render() {
        return (

            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) =>
                        <View style = {styles.submitButton}>
                            <Text style = {styles.submitButtonText}> {item.nome}, {item.status}</Text>
                        </View>

                    }
                />
            </View>
        );
    }
}
TestePaginaComunicacao.navigationOptions = {
    title: 'Dispositivos Cadastrados',
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
        backgroundColor: '#609b93',
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


AppRegistry.registerComponent('AwesomeProject', () => TestePaginaComunicacao);

