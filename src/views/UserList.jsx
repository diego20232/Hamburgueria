import React from "react";
import { FlatList, Alert, View } from "react-native";
import { ListItem, Avatar  } from "@rneui/themed";
import { SafeAreaView } from "react-native";
import users from "../data/users";
import { Button } from "react-native-paper";
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeProvider } from "react-native-paper";


export default props => {


    function getUserItem({ item: user }) {
        return (
        
            <ThemeProvider style={{
                borderRadius: 20
            }}>
                <ListItem style={{
                    padding: 26,
                    borderRadius: 20,
                   
             
                }}>
                 <Avatar source={{ uri: user.imageURL }} />
                    <ListItem.Content >
                        <ListItem.Title>{user.name}</ListItem.Title>
                        <ListItem.Title>{user.desc}</ListItem.Title>
                    </ListItem.Content>

                  

            
                    <Button style={{
                        backgroundColor: '#FFDEAD',
                        padding: 5,
                        borderRadius: 500
                    }} textColor="black">-</Button>
                    <Button style={{
                          backgroundColor: '#FFDEAD',
                          padding: 5,
                          borderRadius: 500
                    }} textColor="black">+</Button>
                </ListItem>
            </ThemeProvider>
        )
    }
    return (
        <View  style={{backgroundColor: '#CD853F'}}>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
                
            />
        </View>
    )
}




