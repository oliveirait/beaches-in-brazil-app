import { View, Text, StatusBar, TouchableOpacity, Alert, TextInput } from 'react-native';
import * as React from 'react'
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import { Banner } from '../components/banner_pub_id';
import { MenuButton, menuList } from '../components/button_menu';
import { styles } from './styles';
import * as Icon from '@expo/vector-icons'
import { ActivityLoad } from '../components/activity_loading';
import { MaterialIcons } from 'expo-vector-icons';



export default function Home({navigation}: any) {

  const [url, setUrl] = React.useState('https://praialimpa.net')
  const [search, setSearch] = React.useState('')
  const webViewRef = React.useRef(null)

  function searchInPage () {
    if (webViewRef.current) {
      webViewRef.current.injectJavaScript(`window.find("${search}")`)
    }
  }

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

  return (
    <View style={styles.CONTAINER}>
      <StatusBar barStyle='default' />
    
      <View style={styles.VIEW_BUTTON}>
        {
          menuList.map(list => 
            <MenuButton  key={list.site} title={list.city} url={list.site} setState={{setUrl, setSearch}} />
          )
        }
      </View>

      <View style={styles.VIEW_INPUT}>
        <View style={{flexDirection: 'row',backgroundColor: '#e2e2e2', width: '92%', alignSelf: 'center', justifyContent: 'space-between', borderRadius: 10}} >
          <TextInput 
            value={search}
            onChangeText={event => setSearch(event)}
            placeholder='Procurar praia'
            keyboardType='web-search'
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
      
      <WebView
        source={{uri: url}}
        useWebView2
        injectedJavaScript={url}
        ref={webViewRef}
        renderLoading={ ActivityLoad }
        renderError={ RenderError }
        //onMessage={e => Alert.alert(e.nativeEvent.data)}
      />

      {!__DEV__ && <Banner />}

    </View>
  );
}