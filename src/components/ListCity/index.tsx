import { View, ListRenderItemInfo, Text, Image, TouchableOpacity } from "react-native"

interface MenuListProps {
  city: string
  site: string
  description: string
  picture: string
}


export const ListCity = ({item}: ListRenderItemInfo<MenuListProps> ) => {

  return (
    <TouchableOpacity 
      style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'flex-start', marginBottom: 30}}
    >
      
      <View style={{width: '100%', height: 300, elevation: 20, shadowColor: '#000'}} >
        <Image source={{uri: item?.picture}} 
          style={{flex: 1, borderRadius: 10, marginBottom: 10}}
          resizeMode="contain"
        />
      </View>

      <Text style={{fontSize: 25, fontWeight: 'bold'}}>{item?.city}</Text>
      <Text>{item?.description}</Text>

    </TouchableOpacity>
  )
}