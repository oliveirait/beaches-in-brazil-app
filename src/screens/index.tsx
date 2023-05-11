import { View, Text, StatusBar, StyleSheet, TouchableOpacity, ToastAndroid, Linking, Alert, TextInput } from 'react-native';
import * as React from 'react'
import { WebView  } from 'react-native-webview';
import VersionCheck from 'expo-version-checker';
import { Banner } from '../components/banner_pub_id';
import { MenuButton } from '../components/button_menu';
import { styles } from './styles';
import * as Icon from '@expo/vector-icons'


export default function Home({navigation}: any) {

  const [url, setUrl] = React.useState('https://praialimpa.net')

  const [search, setSearch] = React.useState('')

  const webViewRef = React.useRef(null)

  const menuList = [
    {city: 'Rio de Janeiro', site: 'https://praialimpa.net'},
    {city: 'São Paulo', site: 'https://praialimpa.net/sao-paulo/'},
    {city: 'Sta Catarina', site: 'https://praialimpa.net/santa-catarina/'},
    {city: 'Sergipe', site: 'https://praialimpa.net/sergipe/'}
  ]

  function searchInPage () {
    if (webViewRef.current) {
      const inject = `
        const term = "${search}";
        const result = window.find(term);
        result;
      `
      webViewRef.current.injectJavaScript(inject)
    }
  }

  function handleSearchResult (event) {
    console.log(event.nativeEvent.data)
  }


  {/*
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
    }, []) */}

  return (
    <View style={styles.container}>
      <StatusBar barStyle='default' />
    
      <View style={styles.viewButton}>
        {
          menuList.map(list => 
            <MenuButton  key={list.site} title={list.city} url={list.site} press={setUrl} />
          )
        }
      </View>

      <View style={{
        height: 110, width: '100%', 
        alignSelf: 'center', justifyContent: 'center' , 
        backgroundColor: '#fff', 
        //position: 'absolute',
        position: 'absolute',
        zIndex: 1,
        top: 60,
      }}>
        <View style={{flexDirection: 'row',backgroundColor: '#e2e2e2', width: '92%', alignSelf: 'center', justifyContent: 'space-between', borderRadius: 10}} >
          <TextInput 
            value={search}
            onChangeText={event => setSearch(event)}
            placeholder='Procurar praia'
            cursorColor='#000'
            style={{
              height: 60, width: '85%',
              backgroundColor: '#e2e2e2', borderRadius: 10, alignSelf: 'center',
              paddingHorizontal: 10,
              fontSize: 20
            }}
          />
          <TouchableOpacity  onPress={searchInPage} style={{ padding: 10, borderTopRightRadius: 10, borderBottomRightRadius: 10}}>
            <Icon.Ionicons name='search' size={42} style={{alignSelf: 'center'}}/>
          </TouchableOpacity>
          
        </View>
      </View>
      

      <View style={styles.webView} >
        <WebView
          source={{uri: url}}
          useWebView2
          injectedJavaScript={url}
          ref={webViewRef}
          onMessage={handleSearchResult}
        />
      </View>
      {!__DEV__ && <Banner />}
    </View>
  );
}