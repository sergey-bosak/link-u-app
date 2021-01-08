import {PixelRatio} from 'react-native';
import {Colors, Assets} from 'react-native-ui-lib';

Colors.loadColors({
  mainOrange: '#d49d06'
});

export const MainAssets = {
  googleIcon: require('../../assets/googleIcon.png'),
  facebookIcon: require('../../assets/facebookIcon.png'),
  editIcon: require('../../assets/editIcon.png'),
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
