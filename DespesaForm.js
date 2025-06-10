import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Despesa } from './dados/Despesa';
import GestorDados from './dados/GestorDados';
import { styles } from './CommonStyles';

export default function DespesaForm( { navigation } ) {
const gestor = new GestorDados();
//const[codigo,setCodigo] = useState('');
const[desc,setDesc] = useState('');
const[valor,setValor] = useState('');
//const[date,setDate] = useState('');
const salvar = () => {
    function pad(num, size) {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    }

    let dateAux = new Date();
    let codigoAux = dateAux;
    dateAux = pad(dateAux.getDate(), 2) + '/' + pad(dateAux.getMonth()+1, 2);

    codigoAux = codigoAux.valueOf();
    let despAux =
        new Despesa(codigoAux,desc,parseFloat(valor), dateAux);

    setDesc('');
    setValor('');

    gestor.adicionar(despAux).then(
        navigation.navigate('ListaDespesas'));
}

return (
    <View style={styles.inputContainer}>
    {/*<TextInput style={styles.input} placeholder='Codigo'
        keyboardType={'numeric'} value={codigo}
        onChangeText={setCodigo}/>*/}
    <TextInput style={styles.input} placeholder='Descrição'
        value={desc} onChangeText={setDesc}/>
    <TextInput style={styles.input} placeholder='Valor'
        keyboardType={'decimal-pad'} value={valor}
        onChangeText={setValor}
        onSubmitEditing={salvar}/>
    {/*<TextInput style={styles.input} placeholder='Data'
        keyboardType={'numeric'} value={date}
        onChangeText={setDate}/>*/}
    <TouchableOpacity style={styles.button} onPress={salvar}>
        <Text style={styles.buttonTextBig}>Adicionar</Text>
    </TouchableOpacity>
    </View>
);
}
