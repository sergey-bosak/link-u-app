import { PixelRatio } from 'react-native';
import { Colors, Assets } from 'react-native-ui-lib';

Colors.loadColors({
  mainOrange: '#d49d06',
});

export const MainAssets = {
  googleIcon: require('../../assets/googleIcon.png'),
  facebookIcon: require('../../assets/facebookIcon.png'),
  editIcon: require('../../assets/editIcon.png'),
  basketIcon: require('../../assets/basket-icon.png'),
  chevronIcon: require('../../assets/chevron-right.png'),
  returnIcon: require('../../assets/return-icon.png'),
  dogBackground: require('../../assets/dog-bg.jpg'),
  houseBackground: require('../../assets/house-bg.jpg'),
  manBackground: require('../../assets/man-bg.jpg'),
  womanBackground: require('../../assets/woman-bg.jpg'),
  kidBackground: require('../../assets/kid-bg.jpg'),
  dogChain: require('../../assets/dog-chain.jpg'),
  dogChain1: require('../../assets/dog-chain1.jpg'),
  closeIcon: require('../../assets/close-icon.png'),
};

Assets.loadAssetsGroup('main', MainAssets);

export const PIXEL_SIZE = PixelRatio.getPixelSizeForLayoutSize(1);

export const PX = (() => {
  if (PIXEL_SIZE === 2 || PIXEL_SIZE === 3) {
    return 1 / 4;
  } else {
    return 1 / PIXEL_SIZE;
  }
})();
