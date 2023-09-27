import { Alert } from "react-native";


type CustomizedAlertProps = {
  title: string
  text: string
  button_yes: string
}


export function customizedAlert ({title, text, button_yes}: CustomizedAlertProps) {
  return (
    Alert.alert(
      `${title}`, `${text}`,
      [
        {text: `${button_yes}`}
      ],
      {cancelable: false}
    )
  )
}