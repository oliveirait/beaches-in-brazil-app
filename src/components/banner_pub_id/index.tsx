import { View } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';


export function Banner () {
  return (
    <View style={{alignSelf: 'center', backgroundColor: '#F2B007'}}>
      <BannerAd
        unitId={TestIds.BANNER}
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


