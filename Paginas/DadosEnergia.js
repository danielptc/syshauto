import React from "react";
import {endereco} from "./TesteComponente";
import {FlatList, Text, View} from "react-native";


    export class VerDispositivos extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isLoading: true
            }
        }


        componentDidMount() {
            return fetch(endereco.relatorioEnergia)
                .then((response) => response.json())
                .then((responseJson) => {

                    this.setState({
                        isLoading: false,
                        dataSource: responseJson.content,
                    }, function () {

                    });

                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

const ConsumoDia = {

    labels: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22','24'],
    datasets: [{
        data: [
            1,
            1,
            1.3,
            2,
            3,
            3.3,
            3,
            2.5,
            4,
            4,
            3.5,
            1.5
        ],
        color: (opacity = 1) => `rgba(255, 5, 10, ${opacity})` // optional
    }
    ]

}
const ConsumoMes = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [{
        data: [
            30, 34, 40, 20, 45, 50, 41, 39, 56, 60, 43, 66,

        ],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
    }
    ]
}

const ConsumoCasa = {
    labels: ['Quarto', 'Quarto Casal', 'Sala', 'Cozinha'],
    datasets: [{
        data: [
            10, 6, 17, 13,

        ],
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})` // optional
    }
    ]
}

const ConsumoSemana = {
    labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
    datasets: [{
        data: [
            30,
            38,
            24,
            31,
            40,
            59,
            66,
        ],
        color: (opacity = 1) => `rgba(255, 255, 0, ${opacity})` // optional
    }
    ]
}

const testeget = {
    labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
    datasets: [{
        data:[10,20,30,40,50,60,60,70],

        color: (opacity = 1) => `rgba(255, 255, 0, ${opacity})` // optional
    }
    ]

}


export { ConsumoSemana, ConsumoMes, ConsumoDia, ConsumoCasa, testeget }
