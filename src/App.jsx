import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "@rneui/themed";
import Icon from 'react-native-vector-icons/Ionicons';

import UserList from "./views/UserList";
import Teste from "./components/Reduce";
import ListTeste from "./components/ListTeste";
import Reduce from "./components/Reduce";
import ReduceA from "./components/ReduceA";


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
            }} initialRouteName="ReduceA">
                <Stack.Screen name="ListTeste" component={ListTeste}
                    options={({ navigation }) => {
                        return {
                            title: '',
                            headerRight: () => (
                                <Button onPress={() => navigation.navigate("UserForm")}
                                    type="clear"
                                   
                                />
                            )
                        }
                    
                    }
                    }
                     
                     />

                     <Stack.Screen
                     name="ReduceA" component={ReduceA} options={{
                        headerStyle: {
                            backgroundColor: '#F4A460'
                        
                        }, 
                        headerTitle: 'Sacolão do DI',
                        headerTitleStyle: {
                            color: 'black',
                            fontSize: 25,
                            fontWeight: 'bold',
                            
                        },
                        headerTitleAlign: 'center'
                     }}
                     />
                     
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}