import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import DespesaForm from './DespesaForm';
import DespesaLista from './DespesaLista';

 const Tab = createBottomTabNavigator();

 export default function App() {
     return (
     <NavigationContainer>
         <Tab.Navigator initialRouteName='ListaDespesas'>
         <Tab.Screen name='ListaDespesas'
             options={{title: 'Minhas Despesas'}}
             component={DespesaLista}/>
         <Tab.Screen name='NovaDespesa'
             options={{title: 'Nova Despesa'}}
             component={DespesaForm}/>
         </Tab.Navigator>
     </NavigationContainer>
     );
 }