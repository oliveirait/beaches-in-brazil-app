import React from "react";
import { ActivityIndicator, Text, View } from 'react-native'

export function ActivityLoad () { 
  return (
    <View style={{position: 'absolute', bottom: 0, right: 0, left: 0, top: 0, justifyContent: 'center', marginBottom: 100}} >
      <ActivityIndicator  style={{alignItems: 'center', justifyContent: 'center'}} size={50} color={'#000'}/>
      <Text style={{fontFamily: 'Roboto-Bold', textAlign: 'center', fontSize: 14}} >
        Carregando...
      </Text>
    </View>
  )
}