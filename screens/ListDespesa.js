import * as React from 'react';
 import { View, Text, Button } from 'react-native';

 function ListDespesa({navigation}) {
     return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>About Screen</Text>
         <Button title='Ir para Home' onPress={() => navigation.navigate('AddDespesa')} />
     </View>
     );
 }

 export default ListDespesa;