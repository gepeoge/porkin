import * as React from 'react';
import { View, Text, Button } from 'react-native';
import ItemDespesa from '../components/ItemDespesa';
import GestorDados from '../dados/gestorDados';

 export default function ListDespesa({navigation}) {
    const gestor = new GestorDados();

    function deleteDespesa(codigo){
        gestor.remover(codigo).then(
        gestor.obterTodos().then(objs => setDespesas(objs))
        );
    }
    
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About Screen</Text>
        <Button title='Ir para Home' onPress={() => navigation.navigate('AddDespesa')} />
        <ItemDespesa/>
    </View>
    );
 }