const data = {
    labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
    datasets: [{
        data: [
            35,
            50,
            60,
            30,
            40,
            80,
            95
        ],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
    },
    ]
}


const progressChartData = [0.4, 0.6, 0.8]

export { data, progressChartData }
