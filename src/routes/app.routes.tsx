import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from "../screens/02_home";
import { Main } from '../screens/01_main';


const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator()


export const AppRoutes = () => {
  return (
    <Stack.Navigator >

      <Stack.Screen 
        name='main' 
        component={Main} 
        options={{headerShown: false}}
      />

      <Stack.Screen 
        name='home' 
        component={Home} 
        options={{headerShown: true,  headerTitle: "Voltar"}}
      />

    </Stack.Navigator>
  )
}
