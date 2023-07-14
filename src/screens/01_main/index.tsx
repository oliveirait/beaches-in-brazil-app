import { useNavigation } from "@react-navigation/native"
import { View, Text, Button, StatusBar, FlatList, ListRenderItemInfo, TouchableOpacity, Image } from "react-native"
import { menuList } from "../../components/button_menu"
import { useState } from "react"


interface MenuListProps {
  city: string
  site: string
  description: string
  picture: string
}


export const Main = () => {

  const navigation = useNavigation()

  const [list] = useState(menuList)

  function handleNextPage (item: string) {
    navigation.navigate('home', { site: item })
  }
  
  function handleGoBack () {
    navigation.goBack()
  }
  
  const ListCity = ({item}: ListRenderItemInfo<MenuListProps> ) => {
    return (
      <TouchableOpacity 
        style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'flex-start', marginBottom: 30, borderRadius: 10, opacity: 20}}
        onPress={() => handleNextPage(item.site)}
      >
        
        <View style={{width: '100%', height: 200, elevation: 20, shadowColor: '#000'}} >
          <Image source={{uri: item?.picture}} 
            style={{flex: 1, borderRadius: 10, marginBottom: 10, width: '100%'}}
            resizeMode="contain"
          />
        </View>
  
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>{item?.city}</Text>
        <Text>{item?.description}</Text>
  
      </TouchableOpacity>
    )
  }


  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar barStyle="dark-content" backgroundColor='#fff'/>

        <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', width: '100%', height: 80}}>
          <Text style={{alignItems: 'center', textAlign: 'left', fontSize: 28, fontWeight: 'bold'}}>Escolha a cidade</Text>
        </View>
     
        <FlatList 
          showsVerticalScrollIndicator={false}
          data={list}
          keyExtractor={item => item?.city}
          renderItem={ ListCity }
          style={{alignSelf: 'center', width: '90%', marginBottom: 20, borderRadius: 10}}
        />
    
    </View>
  )
}