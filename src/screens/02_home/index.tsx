import { View, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import * as React from 'react'
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import { MenuButton, menuList } from '../../components/button_menu';
import { styles } from './styles';
import * as Icon from '@expo/vector-icons'
import { ActivityLoad, ActivityLoadModified, RenderError } from '../../components/web_view_components';
import { Banner } from '../../components/banner_pub_id';
import { SuperModal } from '../../components/super_modal';
import { WebViewProgressEvent } from 'react-native-webview/lib/WebViewTypes';


export const Home = ({route}) => {

  const [search, setSearch] = React.useState('')
  const [page, setPage] = React.useState(true)
  const [modalState, setModalState] = React.useState(true)
 


  const webViewRef = React.useRef(null)

  function searchInPage () {
    if (webViewRef.current) {
      webViewRef.current?.injectJavaScript(`
        window.find("${search}")
      `)
    } 
  }

  function loadProg (event: WebViewProgressEvent) {
    const { progress } = event.nativeEvent
    if (progress > 0) {
      setTimeout(() => {
        setModalState(false)
      }, 1000)
    }
  }




  return (
    <View style={styles.CONTAINER}>
      <StatusBar barStyle="dark-content" backgroundColor='#fff'/>
    
  
     
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
      

        { page === true ? 
 
        <WebView
          source={{uri: route.params?.site}}

          ref={webViewRef}
          renderLoading={ ActivityLoadModified }
          onLoad={ActivityLoadModified}
          onLoadProgress={loadProg}
          onMessage={(eventLoad) => {
            console.log(eventLoad.nativeEvent.data)
            setPage(eventLoad.nativeEvent.data === 'true' ? true : false)
          }}
          cacheMode='LOAD_CACHE_ELSE_NETWORK'
          injectedJavaScript={`
          const html = document.querySelector(".logo")
            if (html) {
              window.ReactNativeWebView.postMessage('true')
            }

            else {
              window.ReactNativeWebView.postMessage('false')
            }
          `}
          />
  
    
    : <ActivityLoad />
      
  }

      <SuperModal isVisible={modalState}/>

    {
      !__DEV__ && <Banner />
    }

    </View>
  );
}