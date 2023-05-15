import { View } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';


const PUB_ID_BANNER = __DEV__ ? TestIds.BANNER : 'ca-app-pub-2213444535919704~5707726205' 

export function Banner () {
  return (
    <View style={{alignSelf: 'center', backgroundColor: '#F2B007'}}>
      <BannerAd
        unitId={PUB_ID_BANNER}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </View>
  )
}

{/*export function TestBanner () {
  return (
    <View style={{alignSelf: 'center', backgroundColor: '#F2B007', width: '100%', height: 60}}>
      <Text>TESTE</Text>
    </View>
  )
}*/}


