import React from "react";

import {TouchableOpacity , StyleSheet} from "react-native";
import Texto from "../componentes/Texto"


export default function BotaoComprar({style , botao, onPress}){

    return <>
        <TouchableOpacity  style={[estilos.botao, style]} onPress={()=>{}}>
            <Texto style={estilos.textobotao}>{ botao }</Texto>
        </TouchableOpacity>
       
    </>

};

const estilos = StyleSheet.create({
    botao:{
        backgroundColor:"#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },

    textobotao:{
        textAlign:"center",
        color: "#FFFFFF",
        fontSize:16,
        lineHeight:26,
        fontWeight:"bold"
    },
});