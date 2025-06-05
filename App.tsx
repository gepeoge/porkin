import { NavigationContainer } from '@react-navigation/native';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import React from 'react';
 import DespesaForm from './screens/AddDespesa';
 import DespesaLista from './screens/ListDespesa';

//teste

 const Tab = createBottomTabNavigator();

 export default function App() {
     return (
     <NavigationContainer>
         <Tab.Navigator initialRouteName='ListDespesa'>
         <Tab.Screen name='ListDespesa'
             options={{title: 'Minhas Despesas'}}
             component={DespesaLista} />
         <Tab.Screen name='AddDespesa'
             options={{title: 'Nova Despesa'}}
             component={DespesaForm} />
         </Tab.Navigator>
     </NavigationContainer>
     );
 }