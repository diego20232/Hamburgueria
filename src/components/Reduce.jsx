import React from "react";
import { View, Text } from "react-native";

export default props => {
const number = [1,2,3,4,5];


const sum = number.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);


return (
    <View style={{flex: 1}}>
        <Text>Números declarados: 1,2,3,4,5</Text>
        <Text>A soma dos números é {sum}</Text>

    </View>
)
}

