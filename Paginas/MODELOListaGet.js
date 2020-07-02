import React from 'react';
import {FlatList, ActivityIndicator, Text, View, StyleSheet} from 'react-native';

export default class FetchExample extends React.Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    componentDidMount(){
        return fetch('http://10.0.0.100:8080/v3/dispositivo/')
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



    render(){

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return(
  /*
            <View style={{flex: 1, paddingTop:20}}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text>{item.id}, {item.nome}, {item.tipoOS}, {item.status}</Text>}
                    keyExtractor={({id}, index) => id}
                />
            </View>
*/

            <View style={styles.MainContainer}>

            <FlatList
        data={this.state.dataSource}
        renderItem={({item}) => <Text>{item.id}, {item.nome}, {item.tipoOS}, {item.status}</Text>}
        keyExtractor={({id}, index) => id}
        />


    </View>




        );
    }
}

const styles = StyleSheet.create({

    MainContainer :{

    justifyContent: 'center',
    flex:1,
    margin: 10,
    paddingTop:20

    },

    FlatListItemStyle: {
    padding: 10,
    fontSize: 18,
    height: 44,
    },

    });
