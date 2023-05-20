import { useRef } from 'react';
import { View } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const PUB_ID_BANNER: string = __DEV__ ? TestIds.BANNER : "ca-app-pub-2213444535919704/6234339818"


export function Banner () {

  return (
    <View style={{alignSelf: 'center'}}>
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


