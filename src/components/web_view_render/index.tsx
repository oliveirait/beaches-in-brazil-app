import { MaterialIcons } from "expo-vector-icons";
import React from "react";
import { ActivityIndicator, Text, View } from 'react-native'


function RenderError () {
  let stringError = `Falha de conexão! \nVerifique sua conexão com a internet`
  return (
    <View style={{position: 'absolute', bottom: 0, right: 0, left: 0, top: 0, justifyContent: 'center', marginBottom: 100}} >
      <MaterialIcons name="error" size={80} color="red" style={{ alignSelf:'center', alignItems: 'center', justifyContent: 'center'}}/>
      <Text style={{fontFamily: 'Roboto-Bold', textAlign: 'center', fontSize: 14, marginTop: 10}} >
        {stringError}
      </Text>
    </View>
  )
}


function ActivityLoad () { 
  return (
    <View style={{position: 'absolute', bottom: 0, right: 0, left: 0, top: 0, justifyContent: 'center', marginBottom: 100}} >
      <ActivityIndicator  style={{alignItems: 'center', justifyContent: 'center'}} size={50} color={'#000'}/>
      <Text style={{fontFamily: 'Roboto-Bold', textAlign: 'center', fontSize: 14}} >
        Carregando...
      </Text>
    </View>
  )
}


export const WebViewRender = { RenderError, ActivityLoad } 