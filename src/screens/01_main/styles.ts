import { StyleSheet } from 'react-native'



export const styles = StyleSheet.create({
    CONTAINER: {flex: 1, backgroundColor: '#f2f2f2'},
  
    VIEW_HEADER: {justifyContent: 'center', alignItems: 'center', backgroundColor: '#f2f2f2', width: '100%', height: 60, marginTop: 10},
  
    TITLE_HEADER: {alignItems: 'center', textAlign: 'left', fontSize: 28, fontWeight: 'bold'},
  
    LIST: {alignSelf: 'center', width: '100%', marginBottom: 20, borderRadius: 10, margin: 10, paddingHorizontal: 20},
  
    VIEW_ACTIVITY_INDICATOR: {flex: 1, alignItems: 'center', justifyContent: 'center'},

    TOUCHABLE_CARD: { 
      flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'flex-start', marginBottom: 20, paddingBottom: 20, padding: 10, borderRadius: 10, opacity: 20
    },
  
    VIEW_IMAGE: {width: '100%', height: 200},
    TITLE: {fontSize: 25, fontWeight: 'bold'},
  
  })