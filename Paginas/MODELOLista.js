import React from 'react';
import {FlatList, ActivityIndicator, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

class MODELOLista extends React.Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    componentDidMount(){
        return fetch('http://192.168.0.121:8080/v3/dispositivo/')
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
                    renderItem={
                        ({item}) =>
                            <TouchableOpacity style = {styles.submitButton}>
                                <Text style = {styles.submitButtonText}> {item.id}, {item.nome}, {item.tipoOS}, {item.status}</Text>
                            </TouchableOpacity>


                    }
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
    submitButton: {
        backgroundColor: 'skyblue',
        padding: 10,
        margin: 5,
        height: 40,
        borderRadius: 10,
    },
    submitButtonText:{
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

});

