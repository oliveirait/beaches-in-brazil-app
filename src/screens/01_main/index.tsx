import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { View, Text, StatusBar, FlatList, ListRenderItemInfo, TouchableOpacity, Image } from "react-native"
import { useCallback, useState } from "react"

import { styles } from "./styles"
import { base } from "../../base"
import { checkNetwork } from "../../utils/network/checkNetwork"
import { simpleAlert } from "../../utils/alerts/simpleAlert"

interface MenuListProps {
  city: string
  site: string
  description: string
  picture: string
}


export const Main = () => {
  const navigation = useNavigation()
  const [list, setList] = useState<MenuListProps[]>([])

  async function goPage (item: MenuListProps) {
    const internet = await checkNetwork()
    if (!internet) {
      return simpleAlert({
        title: 'Não há conexão',
        description: 'Neste momento você está sem internet, verifique sua conexão'
      })
    }
    navigation.navigate('home', { site: item?.site })
  }

  useFocusEffect(
    useCallback(() => {
      setList(base)
    }, [])
  )

  const ListCity = ({item}: ListRenderItemInfo<MenuListProps>) => {
    return (
      <TouchableOpacity 
        style={styles.TOUCHABLE_CARD}
        onPress={() => goPage(item)}
      >
        
        <View style={styles.VIEW_IMAGE} >
          <Image
            
            source={{uri: item.picture}} 
            style={{flex: 1, borderRadius: 10, marginBottom: 10, width: '100%'}}
            resizeMode="cover"
          />
        </View>
  
        <Text style={styles.TITLE}>{item?.city}</Text>
        <Text>{item?.description}</Text>
  
      </TouchableOpacity>
    )
  }

  return (
      <View style={styles.CONTAINER}>
        <StatusBar barStyle="dark-content" backgroundColor='#f2f2f2'/>

          <View style={styles.VIEW_HEADER}>
            <Text style={styles.TITLE_HEADER}> Escolha a cidade </Text>
          </View>
      
          <FlatList 
            showsVerticalScrollIndicator={false}
            data={list}
            keyExtractor={item => item?.city}
            renderItem={ ListCity }
            style={styles.LIST}
            
            
          />
      </View>
  )
}



