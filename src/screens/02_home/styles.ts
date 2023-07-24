import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
  CONTAINER: {
    flex: 1,
  },

  VIEW_BUTTON: {
    flexDirection: 'row', 
    height: 50, width: '100%', 
    alignItems: 'center', justifyContent: 'center',
    textAlign: 'center',
    elevation: 30, shadowColor: '#000', borderWidth: 1
  },

  VIEW_INPUT: {
    height: 100, width: '100%', 
    alignSelf: 'center', justifyContent: 'center' , 
    backgroundColor: '#fff', 
    position: 'absolute',
    zIndex: 1,
    
  },

  WRAP_INPUT_AND_BUTTON: {
    flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between',
    backgroundColor: '#e2e2e2', 
    width: '90%',  
    borderRadius: 10,
    elevation: 5, shadowColor: '#000', borderWidth: 1
  },

  TEXT_INPUT: {
    height: 50, width: '85%',
    backgroundColor: '#e2e2e2', borderRadius: 10, alignSelf: 'center',
    paddingHorizontal: 10,
    fontSize: 15
  },

  BUTTON_SEARCH: {
    padding: 0, 
    borderTopRightRadius: 10, borderBottomRightRadius: 10
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



