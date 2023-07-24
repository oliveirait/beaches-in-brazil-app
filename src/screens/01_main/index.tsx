import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { View, Text, StatusBar, FlatList, ListRenderItemInfo, TouchableOpacity, Image, ActivityIndicator } from "react-native"
import { useCallback, useEffect, useState } from "react"

import { styles } from "./styles"
import { base } from "../../base"

interface MenuListProps {
  city: string
  site: string
  description: string
  picture: string
}


export const Main = () => {
  const navigation = useNavigation()
  const [list, setList] = useState<MenuListProps[]>([])


  useFocusEffect(
    useCallback(() => {
      setList(base)
    }, [])
  )
  
  const ListCity = ({item}: ListRenderItemInfo<MenuListProps> ) => {
    const url = item?.picture

    return (
      <TouchableOpacity 
        style={styles.TOUCHABLE_CARD}
        onPress={
          () => navigation.navigate('home', { site: item?.site })
        }
      >
        
        <View style={styles.VIEW_IMAGE} >
          { url ? 
            <Image source={{uri: url}} 
              style={{flex: 1, borderRadius: 10, marginBottom: 10, width: '100%'}}
              resizeMode="cover"
            />
            : <ActivityIndicator size={24} color={'#0e0088'} />
          }

        </View>
  
        <Text style={styles.TITLE}>{item?.city}</Text>
        <Text>{item?.description}</Text>
  
      </TouchableOpacity>
    )
  }


  return (
    list.length > 0 ? 
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

    : 
      <View style={styles.VIEW_ACTIVITY_INDICATOR}>
        <ActivityIndicator size={60} color={'#0b0c7c'} />
      </View>
  )
}
