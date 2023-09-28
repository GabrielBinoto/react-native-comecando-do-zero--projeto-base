import React from "react";
import { View, Image, StyleSheet } from "react-native";


import Texto from "../../componentes/Texto";
import BotaoComprar from "../../componentes/BotaoCompra";


export default function Detalhes({nome, logofazenda,nomefazenda, descricao, preco , botao}){



    return <>
            <Texto style={estilos.nome}> { nome }</Texto>

            <View style={estilos.fazenda}>
                <Image source={ logofazenda }  style={estilos.imageFazenda}/>
                <Texto style={estilos.nomeFazenda}> { nomefazenda }</Texto>
            </View>

            <Texto style={estilos.descricao}> 
                { descricao }
            </Texto>
            <Texto style={estilos.preco}> { preco }</Texto>

            {/* <TouchableOpacity style={estilos.botao} onPress={()=>{}}> 
                <Texto style={estilos.textobotao}> { botao } </Texto>    
            </TouchableOpacity> */}

            <BotaoComprar botao={botao} style={estilos.botao} onPress={()=>{}}></BotaoComprar>
    </>
};


const estilos = StyleSheet.create({

    nome:{
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },

    fazenda:{
        flexDirection: "row",
        paddingVertical: 12,
    },

    imageFazenda:{
        width: 32,
        height: 32,
    },

    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },

    descricao:{
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },

    preco:{
        color:"#2A9F85",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,

    },

    botao:{
        marginTop:16,
    },

    

});