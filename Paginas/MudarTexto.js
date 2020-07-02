import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    Button,
    Image,
    View,
} from 'react-native';
//import Image from "react-native-web/dist/exports/Image";

export default class Escritorio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teste: 'Teste',
            contador: 1,
            uri: require('../image/lampada.png'),
        };
        this.funcao = this.funcao.bind(this)
    }

    funcao () {

        this.setState({contador: this.state.contador + 1})

        if (this.state.contador % 2 == 0) {
            this.setState({
                teste: 'SALA',
                uri: require('../image/sala.png')
            });
        }
        else {
            this.setState({
                teste: 'LOG',
                uri: require('../image/log.png')
            });
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>
                    { this.state.teste }
                </Text>
                <Image
                    source={this.state.uri}
                    style={styles.logoStyle}
                />
                <Button
                    onPress={ () => this.funcao()}
                    title="Press Me"
                    color="#841584"
                />
            </ScrollView>
        );
    }
}
const styles = {
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    logoStyle: {
        width: 200,
        height: 200,
        marginLeft: 10,
        marginRight: 5,
        alignSelf: 'center',
    },
};
