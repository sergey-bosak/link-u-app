import React from 'react';
import {ActivityIndicator, StyleSheet} from "react-native";
import {View, Image, TouchableOpacity, Assets, Text} from 'react-native-ui-lib';
import {PX} from "../../theme";
import {useFonts} from "expo-font";

type LoginButtonTypes = {
  onPress: () => void;
  image: object;
  label: string;
  backgroundColor: string | object;
}

const LoginButton = ({onPress, image, label, backgroundColor}: LoginButtonTypes) => {
  let [fontsLoaded] = useFonts({
    'Lato': require('../../../assets/fonts/Lato-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size={'large'}/>;
  }

  return (
    <View
      backgroundColor={backgroundColor}
      width={950 * PX}
      height={290 * PX}
      br50
      style={styles.container}
      centerV
    >
      <TouchableOpacity
        onPress={onPress}
        row
        spread
        centerV
        paddingH-25
      >
        <Image
          width={180 * PX}
          height={180 * PX}
          source={image}
          marginL-12
        />
        <Text marginL-15 marginR-12 style={{fontFamily: 'Lato'}} text40 textAlign={'center'}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}

LoginButton.defaultProps = {
  image: Assets.main.googleIcon,
  backgroundColor: '#fff',
  label: 'Sign In',
  onPress: () => alert('Pressed'),
}

const styles = StyleSheet.create({
  container: {
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {width: 17 * PX, height: 11 * PX},
    shadowRadius: 13 * PX,
    shadowOpacity: 0.5,
  }
});

export default LoginButton;
