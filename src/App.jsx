import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "@rneui/themed";
import Icon from 'react-native-vector-icons/Ionicons';

import UserList from "./views/UserList";


const Stack = createNativeStackNavigator();


export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: 'black'
                },
                headerTintColor: '#FFF',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} initialRouteName="UserList">
                <Stack.Screen name="UserList" component={UserList}
                    options={({ navigation }) => {
                        return {
                            title: 'Faça Seu pedido',
                            headerRight: () => (
                                <Button onPress={() => navigation.navigate("UserForm")}
                                    type="clear"
                                   
                                />
                            )
                        }
                    
                    }
                    }
                     
                     />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}