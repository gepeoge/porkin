import * as React from 'react';
 import { View, Text, Button } from 'react-native';

 function AddDespesa({navigation}) {
     return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>Home Screen</Text>
         <Button title='Ir para About' onPress={() => navigation.navigate('ListDespesa')} />
     </View>
     );
 }
 export default AddDespesa;