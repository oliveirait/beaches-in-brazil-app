import { Routes } from "./src/routes"
import { useEffect } from "react";
import { Update } from "./src/services/checkUpdate";


export default function App() {
  useEffect(() => {
    Update.checkVersion()
  }, [])


  return (
    <Routes />
  )
}


