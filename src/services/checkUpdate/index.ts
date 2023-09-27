import { Alert, Linking, ToastAndroid } from 'react-native'
import VersionCheck from 'expo-version-checker'


async function checkVersion () {
  try {
    ToastAndroid.show('Procurando atualizações...', 1000)
    const update = await VersionCheck.needUpdate()
    if (update?.isNeeded) {
      return (
        Alert.alert(
          'Nova versão disponível!',
          'Uma nova atualização está disponível, deseja atualizar agora?',
          [
            {text: 'Não', style: 'cancel'},
            {text: 'Atualizar agora', onPress: async () => await Linking.openURL(update?.storeUrl) }
          ],
  
          {cancelable: false}
        )
      )
    }
  }
  catch (error) {
    return console.log(`Erro ao atualizar ${error} `)
  }
}

export const Update = {
  checkVersion: checkVersion
}



