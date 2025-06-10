import React, {useState, useEffect} from 'react';
 import { Text, View, TouchableOpacity, FlatList }
     from 'react-native';
 import GestorDados from './dados/GestorDados';
 import DespesaItem from './DespesaItem';
 import { styles } from './CommonStyles';
 import { useIsFocused } from '@react-navigation/native';

 export default function DespesaLista( { navigation } ) {
 const gestor = new GestorDados();
 const [despesas, setDespesas] = useState([]);

 const isFocused = useIsFocused();

 useEffect(() => {
     gestor.obterTodos().then(objs => setDespesas(objs));
 }, [isFocused]);

 const myKeyExtractor = item => {
     return item.codigo.toString();
 };

 function excluirDespesa(codigo){
     gestor.remover(codigo).then(
     gestor.obterTodos().then(objs => setDespesas(objs))
     );
 }
 
 return (
     <View style={styles.container}>
     <FlatList style={styles.scrollContainer} data={despesas}
         contentContainerStyle={styles.itemsContainer}
         keyExtractor={myKeyExtractor}
         renderItem={ ({item}) =>
         <DespesaItem
         onDelete={()=>excluirDespesa(item.codigo)}
         despesa={item} />
         }
     />
     
     <TouchableOpacity style={styles.button}
         onPress={()=>navigation.navigate('NovaDespesa')}>
         <Text style={styles.buttonTextBig}>Nova Despesa</Text>
     </TouchableOpacity>
     </View>
 );
 }