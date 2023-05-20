import Home from "../screens/01_home";

import { Navigator, Screen } from './stack';

import { Banner } from "../components/banner_pub_id";

export function AppRoutes () {
  return (
  <>
    <Navigator>
      <Screen 
        name='home' 
        component={Home} 
        options={{ headerShown: false }} 
      />
    </Navigator>

    {
      !__DEV__ && <Banner />
    }
  </>
  )
}
