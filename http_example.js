//This is an example code to understand HTTP Requests//
            import React from 'react';
//import react in our code.

        import { StyleSheet, View, Button, Alert } from 'react-native';
//import all the components we are going to use.

        export default class HttpExample extends React.Component {
            getDataUsingGet() {
                //GET request
                fetch('http://192.168.43.19:8080/v2/equipamento/arcondicionado', {
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




            getDataUsingDelete() {
                //GET request
                fetch('http://192.168.43.19:8080/v2/equipamento/arcondicionado', {
                    method: 'GET',
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
            getDataUsingPost() {
                //POST json
                const dataToSend = {nome: "TesteGET02", tipoOS:"Usando",status:"IDE"};
                //making data to send on server
                let formBody = [];
                for (const key in dataToSend) {
                    const encodedKey = encodeURIComponent(key);
                    const encodedValue = encodeURIComponent(dataToSend[key]);
                    formBody.push(encodedKey + '=' + encodedValue);
                }
                formBody = formBody.join('&');
                //POST request
                fetch('http://192.168.43.19:8080/v2/equipamento/arcondicionado', {
                    method: 'POST', //Request Type
                    body: JSON.stringify(dataToSend), //post body
                    headers: {//Header Defination
                        'Content-Type': 'application/json;charset=UTF-8'
                    },
                })
                    .then(response => response.json())
                    //If response is in json then in success
                    .then(responseJson => {
                        alert(JSON.stringify(responseJson));
                        console.log(responseJson);
                    })
                    //If response is not in json then in error
                    .catch(error => {
                        alert(JSON.stringify(error));
                        console.error(error);
                    });
            }





            render() {
                return (
                    <View style={styles.MainContainer}>
                        {/*Running GET Request*/}
                        <Button title="Get Data Using GET" onPress={this.getDataUsingGet} />

                        {/*Running POST Request*/}
                        <Button title="Get Data Using POST" onPress={this.getDataUsingPost} />
                    </View>
                );
            }
        }

        const styles = StyleSheet.create({
            MainContainer: {
                justifyContent: 'center',
                flex: 1,
                margin: 10,
            },
        });
