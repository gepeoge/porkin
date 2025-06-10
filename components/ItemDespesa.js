import * as React from 'react';
 import { View, Text, Button, TouchableOpacity } from 'react-native';

 function ItemDespesa(props) {
    let btnTitle = "apagar";
     return (
     <View style={{ flex: 30, alignItems: 'left', justifyContent: 'center', width: 300 }} /*(id= {props.despesa.codigo.toString()}*/>
     <TouchableOpacity onLongPress={props.deleteDespesa /*modal de confirmação vem aqui*/}>
         <Text>Descrição{/* {props.despesa.descricao} */}</Text>
         <Text>R$ {/*{/props.despesa.valor.toSting()}*/} </Text>
     </TouchableOpacity>
     </View>
     );
 }
 export default ItemDespesa;