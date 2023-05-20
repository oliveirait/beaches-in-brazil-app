import { Routes } from "./src/routes"
import { useEffect } from "react";
import { Update } from "./src/services/checkUpdate";
import { AppOpenAd, TestIds, AdEventType } from 'react-native-google-mobile-ads';

const PUB_OPEN_ID = __DEV__ ? TestIds.APP_OPEN : 'ca-app-pub-2213444535919704/7988885559'

const openAd = AppOpenAd.createForAdRequest(PUB_OPEN_ID, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
})


export default function App() {

  useEffect(() => {
    Update()
    openAd.load()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      openAd.show()
    }, 1000)
  }, [])

  return (
    <Routes />
  )
}


