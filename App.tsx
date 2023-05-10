import { View, Text, StatusBar, StyleSheet, TouchableOpacity, ToastAndroid, Linking, Alert } from 'react-native';
import * as React from 'react'
import { WebView  } from 'react-native-webview';
import VersionCheck from 'expo-version-checker';
import { Banner } from './src/components/banner_pub_id';

function MenuButton ( props: any ) {
  return (
    <TouchableOpacity onPress={() => props.press(props.url)} 
      style={styles.button}  
    >
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default function App() {

  const [url, setUrl] = React.useState('https://praialimpa.net')

  const removeJavascript = `
    document.querySelector("body > div.footer-container").remove()
    document.querySelector("#topo").remove()
  `
  const [inject, setInject] = React.useState(removeJavascript)
  
  React.useEffect(() => {
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
        ToastAndroid.show('Buscando atualizações', 500)
        const update = await VersionCheck.needUpdate()
          if (update?.isNeeded) {
            Alert.alert(
              'Nova versão disponível!',
              'Uma nova atualização está disponível, deseja atualizar agora?',
              [
                {text: 'Não', style: 'cancel'},
                {text: 'Atualizar agora', onPress: () => openURL(update.storeUrl) }
              ],
    
              {cancelable: false}
            )
            
          }
        }
        catch (error) {
          console.log(`Erro ao atualizar ${error} `)
        }
      }

      checkVersion()
    }, [])

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.viewButton}>
        <MenuButton title='Rio de Janeiro' url='https://praialimpa.net' press={setUrl} />
        <MenuButton title='São Paulo' url='https://praialimpa.net/sao-paulo/' press={setUrl} />
        <MenuButton title='Santa Catarina' url='https://praialimpa.net/santa-catarina/' press={setUrl} />
        <MenuButton title='Sergipe' url='https://praialimpa.net/sergipe/' press={setUrl} />
      </View>

      <View style={styles.webView} >
        <WebView
          source={{uri: url}}
          useWebView2
          injectedJavaScript={inject}
        />
      </View>
      {!__DEV__ && <Banner />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  viewButton: {
    flexDirection: 'row', 
    height: 60, width: '100%', 
    alignItems: 'center', justifyContent: 'center',
    textAlign: 'center',
    elevation: 30, shadowColor: '#000'
  },

  button: {
    width: '50%', height: '100%',
    alignItems: 'center', justifyContent: 'center', 
    flex: 1,
    backgroundColor: '#f6f6f6'
  ,},

  buttonText: {
    fontSize: 12
  },

  webView: {
   flex: 1,backgroundColor: '#fff' 
  },


  TOUCHABLE: {
    width: 70, height: 70, 
    alignItems: 'center', justifyContent: 'center', 
    backgroundColor: '#4a6dd6', 
    borderRadius: 100, 
    opacity: 70
  },
  ICON: {
    borderRadius: 100
  }
});




