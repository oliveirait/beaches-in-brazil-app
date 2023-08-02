import { NavigationContainer } from '@react-navigation/native';
import { AppDrawerRoutes, AppStackRoutes } from "./app.routes"

export function Routes () {
  return (
    <NavigationContainer>
      <AppStackRoutes />
    </NavigationContainer>
   
  )
}