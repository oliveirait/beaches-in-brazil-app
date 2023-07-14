import { MaterialIcons } from "@expo/vector-icons"
import { View, ActivityIndicator, Text, TouchableOpacity } from "react-native"



export function ActivityLoad () { 
  return (
    <View style={{position: 'absolute', bottom: 0, right: 0, left: 0, top: 0, justifyContent: 'center', marginBottom: 100}} >
      <ActivityIndicator  style={{alignItems: 'center', justifyContent: 'center'}} size={50} color={'#000'}/>
      <Text style={{fontFamily: 'Roboto-Bold', textAlign: 'center', fontSize: 14}} >
        Carregando... favor aguarde!
      </Text>
    </View>
  )
}

export function RenderError () {
  let stringError = `Não foi possível carregar a pagina! \nVerifique a conexão com a internet!`
  return (
    <View style={{position: 'absolute', bottom: 0, right: 0, left: 0, top: 0, justifyContent: 'center', marginBottom: 100}} >
      <MaterialIcons name="error" size={80} color="red" style={{ alignSelf:'center', alignItems: 'center', justifyContent: 'center'}}/>
      <Text style={{fontFamily: 'Roboto-Bold', textAlign: 'center', fontSize: 14, marginTop: 10}} >
       {stringError}
      </Text>
    </View>
  )
}

export function RenderErrorMobiNews (props: any) {
  let stringMsg = `Não foi possível carregar a página`
  let stringButton = `Recarregar`
  return (
    <View style={{flex: 1, justifyContent: 'center', marginBottom: 100}} >
      <MaterialIcons name="error" size={80} color="red" style={{ alignSelf:'center', alignItems: 'center', justifyContent: 'center'}}/>
      <Text style={{fontFamily: 'Roboto-Bold', textAlign: 'center', fontSize: 14, marginTop: 10}} >
       {stringMsg}
      </Text>
      <TouchableOpacity onPress={props.handleReload}
        style={{ 
          width: 150, height: 50, 
          borderRadius: 10, 
          backgroundColor: '#F2B007',
          justifyContent: 'center', alignSelf: 'center',
          elevation: 10, shadowColor: '#000',
          marginVertical: 20,
        }}>
        
        <MaterialIcons name="autorenew" size={40} color="black" style={{alignSelf: 'center'}}/>
      </TouchableOpacity>
    </View>
  )
}