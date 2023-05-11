import { TouchableOpacity, Text, StyleSheet } from "react-native";


const styles = StyleSheet.create({
  button: {
    width: '50%', height: '100%',
    alignItems: 'center', justifyContent: 'center', 
    flex: 1,
    backgroundColor: '#f6f6f6'
  ,},

  buttonText: {
    fontSize: 12
  },
})

export function MenuButton ( props: any ) {
  return (
    <TouchableOpacity onPress={() => props.press(props.url)} 
      style={styles.button}  
    >
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  )
}
