import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  viewButton: {
    flexDirection: 'row', 
    height: 60, width: '100%', 
    alignItems: 'center', justifyContent: 'center',
    textAlign: 'center',
    elevation: 30, shadowColor: '#000', borderWidth: 1
  },

  webView: {
   flex: 1,
   backgroundColor: '#fff',
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



