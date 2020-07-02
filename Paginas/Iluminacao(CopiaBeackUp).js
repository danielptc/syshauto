import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    Text,
} from "react-native";
//import Text from "react-native-web/dist/exports/Text";

export default class Iluminacao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgSala: require('../image/lampada_cinza.png'),
            imgDorm01: require('../image/lampada_cinza.png'),
            imgDorm02: require('../image/lampada_cinza.png'),
            imgCozinha: require('../image/lampada_cinza.png'),
            imgWc: require('../image/lampada02.png'),
            imgAreaServ: require('../image/lampada02.png'),
            //contador: 0,
            sala: 1,
            dormitorio01 : 1,
            dormitorio02 : 1,
            cozinha : 1,
            wc : 1,
            areaServico : 1,
        };
        this.fSala = this.fSala.bind(this)
        this.fDorm01 = this.fDorm01.bind(this)
        this.fDorm02 = this.fDorm02.bind(this)
        this.fCozinha = this.fCozinha.bind(this)
        this.fWc = this.fWc.bind(this)
        this.fAServico = this.fAServico.bind(this)
    }

    fSala(){
        this.setState({sala: this.state.sala + 1})

        if (this.state.sala % 2 == 0){
            this.setState({
                imgSala: require('../image/lampada_cinza.png')
            });
        }

        else{
            this.setState({
                imgSala: require('../image/lampada_Amarelo.png')
            });

        }

    }

    fDorm01(){
        this.setState({dormitorio01: this.state.dormitorio01 + 1})

        if (this.state.dormitorio01 % 2 == 0){
            this.setState({
                imgDorm01: require('../image/lampada_cinza.png')
            });
        }

        else{
            this.setState({
                imgDorm01: require('../image/lampada_Amarelo.png')
            });

        }

    }

    fDorm02(){
        this.setState({dormitorio02: this.state.dormitorio02 + 1})

        if (this.state.dormitorio02 % 2 == 0){
            this.setState({
                imgDorm02: require('../image/lampada_cinza.png')
            });
        }

        else{
            this.setState({
                imgDorm02: require('../image/lampada_Amarelo.png')
            });

        }
    }

    fCozinha(){
        this.setState({cozinha: this.state.cozinha + 1})


        if (this.state.cozinha % 2 == 0){
            this.setState({
                imgCozinha: require('../image/lampada_cinza.png')
            });
        }

        else{
            this.setState({
                imgCozinha: require('../image/lampada_Amarelo.png')
            });

        }
    }

    fWc(){
        this.setState({wc: this.state.wc + 1})

        if (this.state.wc % 2 == 0){
            this.setState({
                imgWc: require('../image/lampada02.png')
            });
        }

        else{
            this.setState({
                imgWc: require('../image/lampada_Acesa.png')
            });

        }
    }

    fAServico(){
        this.setState({areaServico: this.state.areaServico + 1})

        if (this.state.sala % 2 == 0){
            this.setState({
                imgAreaServ: require('../image/lampada02.png')
            });
        }

        else{
            this.setState({
                imgAreaServ: require('../image/lampada_Acesa.png')
            });

        }
    }


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require("../image/planta.jpg")}
                    resizeMode="contain"
                    style={styles.image}
                >
                    <View
                        style={[
                            styles.stack,
                            {
                                marginTop: 57.82,
                                marginLeft: 16.28,
                                height: 278.34,
                                width: 380.67
                            }
                        ]}
                    >
                        <ImageBackground
                            source={this.state.imgSala}
                            resizeMode="contain"
                            style={styles.Sala}
                        >
                            <TouchableOpacity style={styles.BtnSala} onPress={ () => this.fSala()}/>
                        </ImageBackground>
                        <ImageBackground
                            source={this.state.imgDorm01}
                            resizeMode="contain"
                            style={styles.Dormi01}
                        >
                            <TouchableOpacity style={styles.BtnDorm01} onPress={ () => this.fDorm01()} />
                        </ImageBackground>
                    </View>
                    <View
                        style={[
                            styles.row,
                            {
                                marginTop: 11.56,
                                marginLeft: 16.28,
                                marginRight: 13.21,
                                height: 239.26
                            }
                        ]}
                    >
                        <View
                            style={[
                                styles.stack,
                                {
                                    height: 148.25,
                                    width: 183.44
                                }
                            ]}
                        >
                            <Image
                                source={this.state.imgCozinha}
                                resizeMode="contain"
                                style={styles.Cozinha}
                            />
                            <TouchableOpacity style={styles.BtnCozinha} onPress={ () => this.fCozinha()} />
                        </View>
                        <ImageBackground
                            source={this.state.imgDorm02}
                            resizeMode="contain"
                            style={styles.Dormi02}
                        >
                            <TouchableOpacity style={styles.BtnDorm02} onPress={ () => this.fDorm02()} />
                        </ImageBackground>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,1)",
        opacity: 1
    },
    image: {
        width: 397,
        height: 656
    },
    stack: {
        position: "relative"
    },
    Sala: {
        top: 0.18,
        left: -0.28,
        width: 200,
        height: 278,
        position: "absolute",
        opacity: 0.4
    },
    BtnSala: {
        width: 167,
        height: 270,
        backgroundColor: "rgba(61,28,248,1)",
        opacity: 0,
        marginTop: 4.18,
        marginLeft: 16.72
    },
    Dormi01: {
        top: 0.18,
        left: 178.72,
        width: 202,
        height: 211,
        position: "absolute",
        opacity: 0.4
    },
    BtnDorm01: {
        width: 157,
        height: 211,
        backgroundColor: "rgba(61,28,248,1)",
        opacity: 0,
        marginTop: 0.18,
        marginLeft: 20.58
    },
    row: {
        flexDirection: "row"
    },
    Cozinha: {
        top: 0.28,
        left: -0.28,
        width: 182,
        height: 148,
        position: "absolute",
        opacity: 0.4
    },
    BtnCozinha: {
        top: 0.28,
        left: 12.72,
        width: 171,
        height: 148,
        backgroundColor: "rgba(61,28,248,1)",
        position: "absolute",
        opacity: 0
    },
    Dormi02: {
        width: 167,
        height: 152,
        opacity: 0.4,
        marginLeft: 16.28,
        marginTop: 87.28
    },
    BtnDorm02: {
        width: 157,
        height: 152,
        backgroundColor: "rgba(61,28,248,1)",
        opacity: 0,
        marginTop: -0.42,
        marginLeft: 1.72
    }
});
