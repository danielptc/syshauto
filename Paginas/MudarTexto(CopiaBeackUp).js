import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    Button,
} from 'react-native';

export default class MudarTexto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teste: 'Teste',
            contador: 0
        };
        this.funcao = this.funcao.bind(this)
    }

    funcao () {

        if (this.state.contador % 2 == 0){
        this.setState({
            teste : 'blabla'
        });
        }

        else{
            this.setState({
                teste : 'fsdfsdfsdfds'
            });

        }

        this.setState({contador: this.state.contador + 1})
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>
                    { this.state.teste }
                </Text>
                <Button
                    onPress={ () => this.funcao()}
                    title="Press Me"
                    color="#841584"
                />
                <Text> Voce clicou {this.state.contador} vezes</Text>
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
