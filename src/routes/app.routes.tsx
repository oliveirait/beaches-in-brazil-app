import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Home } from "../screens/02_home";
import { Main } from '../screens/01_main';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();


export const AppStackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{
      gestureDirection: 'horizontal',
      gestureEnabled: true,
      headerShown: false,
      animation: 'fade'
    }}>

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



export const AppDrawerRoutes = () => {
  return (
    <Drawer.Navigator initialRouteName='main'>
      <Drawer.Screen name="main" component={Main} />
      <Drawer.Screen name="home" component={Home} options={{}}/>
    </Drawer.Navigator>
  );
}
