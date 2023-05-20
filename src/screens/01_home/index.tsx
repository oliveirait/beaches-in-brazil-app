import { View, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import * as React from 'react'
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import { MenuButton, menuList } from '../../components/button_menu';
import { styles } from './styles';
import * as Icon from '@expo/vector-icons'
import { WebViewRender } from '../../components/web_view_render';


export default function Home () {

  const [url, setUrl] = React.useState('https://praialimpa.net')
  const [search, setSearch] = React.useState('')

  const webViewRef = React.useRef(null)

  function searchInPage () {
    if (webViewRef.current) {
      webViewRef.current?.injectJavaScript(`
        window.find("${search}")
      `)
    } 
  }

  return (
    <View style={styles.CONTAINER}>
      <StatusBar barStyle='default' />
    
      <View style={styles.VIEW_BUTTON}>
        {
          menuList.map( list => 
            <MenuButton  
              key={list.site} 
              title={list.city} 
              url={list.site} 
              setState={{setUrl, setSearch}} 
            />
          )
        }
      </View>

      <View style={styles.VIEW_INPUT}>
        <View style={styles.WRAP_INPUT_AND_BUTTON} >
          <TextInput 
            defaultValue={search}
            onChangeText={e => setSearch(e)}
            placeholder='Procurar praia'
            keyboardType='web-search'
            cursorColor='#000'
            style={styles.TEXT_INPUT}
          />

          <TouchableOpacity  onPress={searchInPage} style={styles.BUTTON_SEARCH}>
            <Icon.Ionicons name='search' size={42} style={{alignSelf: 'center'}}/>
          </TouchableOpacity>    
        </View>
      </View>
      
      <WebView
        source={{uri: url}}
        useWebView2
        injectedJavaScript={url}
        ref={webViewRef}
        renderLoading={ WebViewRender.ActivityLoad }
        renderError={ WebViewRender.RenderError }
      />

    </View>
  );
}