import { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";


export const menuList = [
  {city: 'Rio de Janeiro', site: 'https://praialimpa.net', description: 'Conhecida como Cidade Maravilhosa', picture: 'https://loucosporpraia.com.br/wp-content/uploads/2014/07/praia-do-recreio-por-crispelomundo.jpg'},
  {city: 'São Paulo', site: 'https://praialimpa.net/sao-paulo/', description: 'Conhecida como Sampa, Pauliceia Terra da Garoa', picture: 'https://www.viagensecaminhos.com/wp-content/uploads/2012/02/guaruja-sao-paulo.jpg'},
  {city: 'Sta Catarina', site: 'https://praialimpa.net/santa-catarina/', description: 'Conhecida como Ilha da Magia', picture: 'https://magazine.zarpo.com.br/wp-content/uploads/2021/06/Capa-praias-SC.jpg'},
  {city: 'Sergipe', site: 'https://praialimpa.net/sergipe/', description: 'Conhecida como o Jardim de Sergipe', picture: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/07/cb/e5/maravilhosa-praia-dos.jpg'}
]

export function MenuButton ( props: any ) {
  const { setUrl, setSearch } = props.setState

  function handleChangePage () {
    setUrl(props.url)
    setSearch('')
  }

  return (
    <TouchableOpacity onPress={handleChangePage} style={styles.button}> 
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
  },

  buttonText: {
    fontSize: 12
  },
})
