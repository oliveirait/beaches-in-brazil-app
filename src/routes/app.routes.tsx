import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from "../screens/02_home";
import { Main } from '../screens/01_main';
import { Banner } from "../components/banner_pub_id";


const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator()


export const AppRoutes = () => {
  return (
  <>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen 
        name='main' 
        component={Main} 
      />

      <Stack.Screen 
        name='home' 
        component={Home} 
      />

    </Stack.Navigator>

    {
      !__DEV__ && <Banner />
    }
  </>
  )
}
