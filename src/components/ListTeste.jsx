import React from "react";
import { View, Text, FlatList } from "react-native";
import { Button } from "react-native-paper";

export default props => {

        const produtos = [
            {
                id: 1,
                name: 'Banana',
                preco: 1.50,
            },
            {
                id: 2,
                name: 'Maca',
                preco: 2.00,
            },
            {
                id: 3,
                name: 'Uva',
                preco: 1.70,
            },
            {
                id: 4,
                name: 'Kiwi',
                preco: 3.50,
            },
            {
                id: 5,
                name: 'Pera',
                preco: 4.50,
            },
        ];


    return (
        <View style={{flex: 1}}>
           
        {produtos.map(produto => (
           <Text key={produto.id}>{produto}</Text>
        ))}
        
       
       
        <Button>carregar</Button>
        </View>
    )
}


