import React from "react";
import {StyleSheet, View } from "react-native";

// -- Componentes -- // 
import Detalhes from "../componentes/Detalhes";
// ------------- // 

// -- Imagens -- // 
import Topo from "../componentes/Topo";
// ------------- // 


export default function Cesta(){
    return <>
            <Topo />
            <View style={estilos.cesta}>
               <Detalhes />
            </View>
    </>

}

const estilos = StyleSheet.create({
    cesta:{
        paddingVertical:8,
        paddingHorizontal: 16,
    },
    
});