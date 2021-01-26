
import {PixelRatio, Dimensions} from 'react-native';

export function responsivePixelSize(pixelSize) {
    // return pixelSize;// * pixelRatio;
    return Math.round(PixelRatio.roundToNearestPixel(pixelSize)); // * pixelRatio;
  }
  
export function isLargeScreen(){
  const { height, width } = Dimensions.get('window');

}

export const isIOS = () => {
  return Platform.OS === 'ios';
};

export const isAndroid = () => {
  return Platform.OS === 'android';
};

export const isIphoneSE = () => {
  return Platform.OS === 'ios' && parseInt(Platform.Version, 10) < 11;
};

export const isIphoneX = () => {
  const { height, width } = Dimensions.get('window');

  return Platform.OS === 'ios' && (height === 812 || width === 812);
};


export const isIphoneXOrLarger = () => {
  const { height, width } = Dimensions.get('window');

  return Platform.OS === 'ios' && (height >= 812 || width >= 812);
};

export const isSmallIphone = () => {
  const { height, width } = Dimensions.get('window');
  return isIOS() && (height <= 600 && width <= 360);
};

export const isNormalSizeIphone = () => {
  return isIOS && !isSmallIphone() && !isIphoneXOrLarger();
};


export const isLargeAndroid = () => {
  const { height, width } = Dimensions.get('window');
  return Platform.OS === 'android' && height >= 692;
};



export const isIOSVersionEqualGreaterThan = version => {
  const majorVersionIOS = parseInt(Platform.Version, 10);
  return majorVersionIOS >= version;
};