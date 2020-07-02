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

export default class VerDispositivos extends React.Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
        global.idDispositivo = '';
        global.nomeDispositivo = '';
        global.sistemaOperacopnalDispositivo = '';
        global.statusDispositivo = '';
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



    //handling onPress action
    getListViewItem = (item) => {

        this.setState({
            this: global.idDispositivo = item.id,
        });

        this.setState({

            this: global.nomeDispositivo = item.nome,
        });
        this.setState({
            this: global.sistemaOperacopnalDispositivo = item.tipoOS,
        });

        this.setState({
            this:global.statusDispositivo = item.status
        });

        this.props.navigation.navigate('DetalhesDispositivo')
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
                    //ItemSeparatorComponent={this.renderSeparator}
                />
            </View>
        );
    }
}
VerDispositivos.navigationOptions = {
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


AppRegistry.registerComponent('AwesomeProject', () => VerDispositivos);

export {VerDispositivos}
