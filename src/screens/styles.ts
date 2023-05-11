import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
  CONTAINER: {
    flex: 1,
  },

  VIEW_BUTTON: {
    flexDirection: 'row', 
    height: 60, width: '100%', 
    alignItems: 'center', justifyContent: 'center',
    textAlign: 'center',
    elevation: 30, shadowColor: '#000', borderWidth: 1
  },

  VIEW_INPUT: {
    height: 110, width: '100%', 
    alignSelf: 'center', justifyContent: 'center' , 
    backgroundColor: '#fff', 
    position: 'absolute',
    zIndex: 1,
    top: 60,
  },

  WEB_VIEW: {
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



