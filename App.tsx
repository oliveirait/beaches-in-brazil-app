import { Alert, Linking, ToastAndroid } from "react-native";
import { Routes } from "./src/routes"
import VersionCheck from 'expo-version-checker';
import { useEffect } from "react";

export default function App() {

  async function openURL (URL: string) {
    const isLink = await Linking.canOpenURL(URL)
    if (isLink) {
      Linking.openURL(URL)
    }
    else {
      ToastAndroid.show('Falhou ao abrir link', 1000)
    }
  }

  async function checkVersion () {
    try {
      ToastAndroid.show('Procurando atualizações...', 1000)
      const update = await VersionCheck.needUpdate()
      if (update?.isNeeded) {
        Alert.alert(
          'Nova versão disponível!',
          'Uma nova atualização está disponível, deseja atualizar agora?',
          [
            {text: 'Não', style: 'cancel'},
            {text: 'Atualizar agora', onPress: () => openURL(update?.storeUrl) }
          ],

          {cancelable: false}
        )
        
      }
    }
    catch (error) {
      console.log(`Erro ao atualizar ${error} `)
    }
  }

  useEffect(() => {
    checkVersion()
  }, [])

  return <Routes />
}


