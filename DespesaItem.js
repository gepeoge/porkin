import React from 'react';
 import {Text, View, TouchableOpacity} from 'react-native';
 import { styles } from './CommonStyles';

 export default function DespesaItem(props){
     return (
     <View style={styles.container} id={props.despesa.codigo.toString()}>
         <Text style={styles.textItem}>
            {props.despesa.desc}</Text>
         <Text style={styles.textItem.info}>
            R$ {props.despesa.valor.toFixed(2)} - {props.despesa.data}</Text>
         <View style={styles.buttonsContainer}>
         <TouchableOpacity style={styles.deleteButton}
                             onLongPress={props.onDelete}>
             <Text style={styles.buttonText}>Apagar (segure)</Text>
         </TouchableOpacity>
         </View>
     </View>
     );
 }