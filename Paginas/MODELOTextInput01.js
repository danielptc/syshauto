/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react";
import { Platform, StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

export default class MODELOTextInput01 extends React.Component {



    render() {
        return (
            <View>

                <TextInput
                    style={{height: 40}}
                    placeholder="userName"
                    onChangeText={(text) => this.userName = text}
                />

                <TextInput
                    style={{height: 40}}
                    placeholder="Password"
                    onChangeText={(text) => this.Password = text}
                />


                <Button
                    title="Sign in!"
                    onPress={this._signInAsync}
                />

            </View>

        );
    }
    _signInAsync = async () => {
        //console.log("nome " + this.userName)
        //console.log("Password" +  this.Password)
        //this.enviar()
        this.testeGetNome()
    };

    enviar() {
        const dataToSend = {nome: this.userName, Password: this.Password};

        let formBody = [];
            for (const key in dataToSend) {
            const encodedKey = encodeURIComponent(key);
            const encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');


        fetch('http://10.0.0.100:8080/v1/usuario/findByName/' + {nome: this.userName}, {
            method: 'POST',

            body:JSON.stringify(dataToSend),

            headers: {'Content-Type': 'application/json;charset=UTF-8'},

        })
    }


    testeGetNome() {
        //GET request
        fetch(`http://192.168.0.121:8080/v3/dispositivo/${this.userName}`,{
            method: 'DELETE',
            //Request Type
        })
            .then(response => response.json())
            //If response is in json then in success
            .then(responseJson => {
                //Success
                alert(JSON.stringify(responseJson));
                console.log(responseJson);
            })
            //If response is not in json then in error
            .catch(error => {
                //Error
                alert(JSON.stringify(error));
                console.error(error);
            });
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e5e5e5"
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
    }
});
