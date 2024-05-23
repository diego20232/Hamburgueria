import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

export default props => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);


    useEffect(() => {
        const newTotal = cart.reduce((accumulator, currentValue) =>
            accumulator + currentValue.price * currentValue.quantity, 0);
        setTotal(newTotal);
    }, [cart]);


    const handleAddToCart = (item, quantity) => {
        const newCart = [...cart];
        const existingItemIndex = newCart.findIndex(i => i.id === item.id);

        if (existingItemIndex === -1) {
            setCart([...newCart, { ...item, quantity }]);
        } else {
            newCart[existingItemIndex].quantity += quantity;
            setCart(newCart);
        }
    };

    const handleRemoveFromCart = index => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', marginTop: 120 }}>
       
            <View>
            <Text style={{
                fontSize: 40
            }}>Sacolão do DI</Text>

                <Pressable style={{
                    backgroundColor: '#F4A460',
                    borderRadius: 15,
                    padding: 10,
                    width: 330,
                    marginTop: -100
                }}>
                    <Text style={{ left: 105, fontWeight: 'bold', fontStyle: 'italic', fontSize: 20 }}>Banana 1,50$</Text>
                    <Button style={{
                        margin: 30,
                        backgroundColor: '#F5DEB3',
                        borderRadius: 30
                    }} textColor="black" onPress={() => handleAddToCart({ id: 1, name: 'Banana', price: 1.5, emoji: '🍌' }, 1)}>
                        Adicionar 1 🍌  
                    </Button>
                </Pressable>

                <Pressable style={{
                    backgroundColor: '#F4A460',
                    borderRadius: 15,
                    padding: 10,
                    width: 330,
                    marginTop: 20
                }}>
                    <Text style={{ left: 105, fontWeight: 'bold', fontStyle: 'italic', fontSize: 20 }}>Laranja 3,50$</Text>
                    <Button style={{
                        margin: 30,
                        backgroundColor: '#F5DEB3',
                        borderRadius: 30
                    }} textColor="black" onPress={() => handleAddToCart({ id: 2, name: 'Laranja', price: 3, emoji: '🍊' }, 1)}>
                        Adicionar 1 🍊
                    </Button>
                </Pressable>


                <Pressable style={{
                    backgroundColor: '#F4A460',
                    borderRadius: 15,
                    padding: 10,
                    width: 330,
                    marginTop: 20
                }}>
                    <Text style={{ left: 105, fontWeight: 'bold', fontStyle: 'italic', fontSize: 20 }}>Maça 1,50$</Text>
                    <Button style={{
                        margin: 30,
                        backgroundColor: '#F5DEB3',
                        borderRadius: 30
                    }} textColor="black" onPress={() => handleAddToCart({ id: 3, name: 'Maça', price: 3.5, emoji: '🍎' }, 1)}>
                        Adicionar 1 🍎
                    </Button>
                </Pressable>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    color: 'red',
                }}>Total: RS$ {total}</Text>



            </View>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',

            }}>Carrinhos de compras</Text>
            <View>
                {cart.map((item, index) => (
                    <Pressable key={item.id}>
                        <Text role="img" aria-label={item.name}>{item.emoji}
                            {item.name} ({'RS$'} {item.price} x {item.quantity}) = RS$
                            {item.price * item.quantity}
                        </Text>

                        <Button textColor="white" onPress={() => handleRemoveFromCart(index)} style={{
                            backgroundColor: 'red',
                            width: 200,
                            marginTop: 6
                        }}>Remover</Button>
                    </Pressable>
                ))}

            </View>
        </View>
    )



}
