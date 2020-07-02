import React from "react";
import Ajustes from "./Ajustes";
/*
//const url = "http://10.61.57.103:8080/";  //TRABALHO
//const url = "http://10.0.0.100:8080/";     //FACULDADE
const url = "http://192.168.0.108:8080/";     //CASA
//const url = "http://192.168.25.24:8080/";     //VÓ
//const url = "http://192.168.25.11:8080/";     //VÓ
//const url = global.ipServidor;

const endereco ={


    enderecoDispositivos: `${url}v3/dispositivo/`,

    enderecoEquipamentos:`${url}v2/equipamentos`,

    enderecoUsuario: `${url}v1/usuario/`,

    enderecoControleIluminacao: `${url}v3/dispositivo/desligarLed`,

    relatorioEnergia: `${url}v4/relatorio_energia_eletrica`
}

const iluminacao = {

    desligarLuzQuadro(){
        fetch(endereco.enderecoControleIluminacao, {
            method: 'POST',
            body: 'sala_quadro_desligado',
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

    ligaLuzQuadro(){
    fetch(endereco.enderecoControleIluminacao,  {
        method: 'POST',
        body: 'sala_quadro_ligado',
        headers: {'Content-Type': 'application/json;charset=UTF-8'},
    })
    },

    desligarLuzGeral(){
        fetch(endereco.enderecoControleIluminacao,  {
            method: 'POST',
            body: 'sala_toda_desligado',
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

    ligarLuzGeral(){
        fetch(endereco.enderecoControleIluminacao,  {
            method: 'POST',
            body: 'sala_toda_ligado',
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

    desligarLuzFundo(){
        fetch(endereco.enderecoControleIluminacao,  {
            method: 'POST',
            body: 'sala_fundo_desligado',
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

    ligarLuzFundo(){
        fetch(endereco.enderecoControleIluminacao,  {
            method: 'POST',
            body: 'sala_fundo_ligado',
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

    desligarTomada01(){
        fetch(endereco.enderecoControleIluminacao, {
            method: 'POST',
            body: 'tomada01_desligada',
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

    ligarTomada01(){
        fetch(endereco.enderecoControleIluminacao, {
            method: 'POST',
            body: 'tomada01_ligada',
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

    desligaDormi01(){
        fetch(endereco.enderecoControleIluminacao, {
            method: 'POST',
            body: 'tomada01_desligada',
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

    ligarTomada02(){
        fetch(endereco.enderecoControleIluminacao, {
            method: 'POST',
            body: 'tomada02_ligada',
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

    desligaDormi02(){
        fetch(endereco.enderecoControleIluminacao, {
            method: 'POST',
            body: 'tomada02_desligada',
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

    ligarTomada03(){
        fetch(endereco.enderecoControleIluminacao, {
            method: 'POST',
            body: 'tomada03_ligada',
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

    desligaDormi03(){
        fetch(endereco.enderecoControleIluminacao, {
            method: 'POST',
            body: 'tomada03_desligada',
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

    ligaDormi01(){
        fetch(endereco.enderecoControleIluminacao, {
            method: 'POST',
            body: 'dormi02Ligado',
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

    deligaDormi02(){
        fetch(endereco.enderecoControleIluminacao, {
            method: 'POST',
            body: 'tomada01_desligada',
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

    ligaDormi02(){
        fetch(endereco.enderecoControleIluminacao, {
            method: 'POST',
            body: 'dormi02Ligado',
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

    deligaCozinha(){
        fetch(endereco.enderecoControleIluminacao, {
            method: 'POST',
            body: 'cozinha_desligada',
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

    ligaCozinha(){
        fetch(endereco.enderecoControleIluminacao, {
            method: 'POST',
            body: 'cozinha_ligada',
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

}

const controleAr = {

    ligarAr(){
        fetch(endereco.enderecoControleIluminacao, {
            method: 'POST',
            body: "ligarAr",
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

    desligarAr(){
        fetch(endereco.enderecoControleIluminacao, {
            method: 'POST',
            body: "desligarAr",
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

    diminuirTemperatura(){
        fetch(endereco.enderecoControleIluminacao,{
            method: 'POST',
            body: "menosTemperatura",
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })

    },

    aumentarTemperatura(){
        fetch(endereco.enderecoControleIluminacao, {
            method: 'POST',
            body: "maisTemperatura",
            headers: {'Content-Type': 'application/json;charset=UTF-8'},

        })
    }
}

const controleDataShow = {

    ligarDataShow(){
        fetch(endereco.enderecoControleIluminacao, {
            method: 'POST',
            body: "datashowLigado",
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

    congelarDataShow(){
        fetch(endereco.enderecoControleIluminacao, {
            method: 'POST',
            body: "datashowCongelar",
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

    AutomaticoDataShow(){
        fetch(endereco.enderecoControleIluminacao, {
            method: 'POST',
            body: "datashowAutomatico",
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

    VideoDataShow(){
        fetch(endereco.enderecoControleIluminacao, {
            method: 'POST',
            body: "dataShowVideo",
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

}

const controleSom = {

    LigarSom(){
        fetch(endereco.enderecoControleIluminacao, {
            method: 'POST',
            body: "ligarSom",
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

    modoOperacao(){
        fetch(endereco.enderecoControleIluminacao, {
            method: 'POST',
            body: "modoOperacao",
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

    semSom(){
        fetch(endereco.enderecoControleIluminacao, {
            method: 'POST',
            body: "semSom",
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

    playPause(){
        fetch(endereco.enderecoControleIluminacao, {
            method: 'POST',
            body: "playPause",
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

    anteriorSom(){
        fetch(endereco.enderecoControleIluminacao, {
            method: 'POST',
            body: "anterior",
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

    proximoSom(){
        fetch(endereco.enderecoControleIluminacao, {
            method: 'POST',
            body: "proximo",
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

    scanSom(){
        fetch(endereco.enderecoControleIluminacao, {
            method: 'POST',
            body: "scan",
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

    VolumeMenos(){
        fetch(endereco.enderecoControleIluminacao, {
            method: 'POST',
            body: "volumeMenos",
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    },

    VolumeMais(){
        fetch(endereco.enderecoControleIluminacao, {
            method: 'POST',
            body: "volumeMais",
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
        })
    }




}

export {endereco, iluminacao, controleAr, controleDataShow, controleSom}
*/
