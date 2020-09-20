import React, {ReactNode} from 'react';
import {View} from 'react-native-ui-lib';
import Background from "../Background";

type BaseScreenTypes = {
  children: ReactNode;
  style?: object;
}

const BaseScreen = ({children, style}: BaseScreenTypes) => {
  return (
    <Background>
      <View marginH-25 marginV-50 style={style} height={'90%'}>
        {children}
      </View>
    </Background>
  );
}

export default BaseScreen;
