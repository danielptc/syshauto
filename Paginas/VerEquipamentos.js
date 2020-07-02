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

export default class VerEquipamentos extends React.Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}

        global.idEquipamento = '';
        global.nomeEquipamento = '';
        global.categoriaEquipamento = '';
        global.statusEquipamento = '';
        global.estadoEquipamento = '';
        global.marcaEquipamento = '';
        global.modeloEquipamento = '';
        global.enderecoIpEquipamento = '';


        }


    componentDidMount(){
        return fetch(endereco.enderecoEquipamentos)
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

        this.setState({
            this: global.idEquipamento = item.id,
        });

        this.setState({

            this: global.nomeEquipamento = item.nome,
        });

        this.setState({
            this: global.statusEquipamento = item.status,
        });

        this.setState({
            this: global.estadoEquipamento = item.estado,
        });

        this.setState({
            this:global.categoriaEquipamento = item.categoria,
        });

        this.setState({
            this:global.marcaEquipamento = item.marca,
        });

        this.setState({
            this:global.modeloEquipamento = item.modelo,
        });

        this.setState({
            this:global.enderecoIpEquipamento = item.endereco_ip,
        });



        this.props.navigation.navigate('DetalhesEquipamento')
    }

    render() {
        return (

            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) =>
                        <TouchableOpacity style = {styles.submitButton} onPress={this.getListViewItem.bind(this, item)}>
                            <Text style = {styles.submitButtonText}> {item.nome}</Text>
                        </TouchableOpacity>

                    }
                />
            </View>
        );
    }
}

VerEquipamentos.navigationOptions = {
    title: 'Equipamentos Cadastrados',
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
