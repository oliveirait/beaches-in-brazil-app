import { View, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import * as React from 'react'
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import { MenuButton, menuList } from '../../components/button_menu';
import { styles } from './styles';
import * as Icon from '@expo/vector-icons'
import { ActivityLoad, RenderError } from '../../components/web_view_components';


export const Home = ({route}) => {

  const [url, setUrl] = React.useState(route.params?.site)
  const [search, setSearch] = React.useState('')

  const webViewRef = React.useRef(null)

  function searchInPage () {
    if (webViewRef.current) {
      webViewRef.current?.injectJavaScript(`
        window.find("${search}")
      `)
    } 
  }

  React.useEffect(() => {
    console.log(url)
  })

  return (
    <View style={styles.CONTAINER}>
      <StatusBar barStyle="dark-content" backgroundColor='#fff'/>
    
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
        injectedJavaScript={url}
        ref={webViewRef}
        renderLoading={ ActivityLoad }
        renderError={ RenderError }
        
      />

    </View>
  );
}