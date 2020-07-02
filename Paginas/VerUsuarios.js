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
import {endereco} from './TesteComponente';

export default class VerUsuarios extends React.Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
        global.idUsuario = '';
        global.nome = '';
        global.cpf = '';
        global.sexo = '';
        global.dataNascimento = '';
        global.telefone = '';
        global.email = '';


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

    valorGlobal = (item) => {
        this.setState({
            this: global.idUsuario = item.id,
        });

        this.setState({
            this: global.nome = item.nome,
        });

        this.setState({
            this: global.cpf = item.cpf,
        });

        this.setState({
            this: global.sexo = item.sexo,
        });

        this.setState({
            this: global.dataNascimento = item.dataNascimento,
        });

        this.setState({
            this: global.telefone = item.telefone,
        });

        this.setState({
            this: global.email = item.email,
        });
        this.props.navigation.navigate('DetalhesUsuario')

    }




    render() {
        return (

            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) =>
                        <TouchableOpacity style = {styles.submitButton} onPress={this.valorGlobal.bind(this, item)}>
                            <Text style = {styles.submitButtonText}>{item.nome}</Text>
                        </TouchableOpacity>

                    }
                    //ItemSeparatorComponent={this.renderSeparator}
                />
            </View>
        );
    }
}

VerUsuarios.navigationOptions = {
    title: 'Usuários Cadastrados',
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
        borderRadius: 10,
        width: wp('99%'),
        height: hp('7%'),
    },
    submitButtonText:{
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: hp('3%'),
    },
})


AppRegistry.registerComponent('AwesomeProject', () => VerUsuarios);
