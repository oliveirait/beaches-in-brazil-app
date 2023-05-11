import { TouchableOpacity, Text, StyleSheet } from "react-native";


export const menuList = [
  {city: 'Rio de Janeiro', site: 'https://praialimpa.net'},
  {city: 'São Paulo', site: 'https://praialimpa.net/sao-paulo/'},
  {city: 'Sta Catarina', site: 'https://praialimpa.net/santa-catarina/'},
  {city: 'Sergipe', site: 'https://praialimpa.net/sergipe/'}
]

export function MenuButton ( props: any ) {
  return (
    <TouchableOpacity onPress={() => props.press(props.url)} style={styles.button}> 
      <Text style={styles.buttonText}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

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
