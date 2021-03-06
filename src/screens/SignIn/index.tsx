import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { View, Assets } from 'react-native-ui-lib';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import BaseScreen from '../../components/BaseScreen';
import LoginButton from '../../components/LoginButton';
import { useFonts } from 'expo-font';
import Title from '../../components/Title';

const { height } = Dimensions.get('screen');

type SignInTypes = {
  navigation: NavigationScreenProp<NavigationState>;
};

const SignIn = ({ navigation }: SignInTypes) => {
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0));
  let [fontsLoaded] = useFonts({
    Karla: require('../../../assets/fonts/Karla-Regular.ttf'),
  });

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  if (!fontsLoaded) return <ActivityIndicator size={'large'} />;

  return (
    <>
      <BaseScreen>
        <Animated.View style={{ opacity: fadeAnim, alignItems: 'center' }}>
          <Title label="Snatch It" width={'60%'} />
        </Animated.View>
        <View style={styles.container}>
          <Animated.View
            style={[styles.animatedContainer, { opacity: fadeAnim }]}
          >
            <LoginButton
              image={Assets.main.googleIcon}
              onPress={() => navigation.navigate('Dashboard')}
              label="Google"
            />
            <LoginButton image={Assets.main.facebookIcon} label="Facebook" />
          </Animated.View>
        </View>
      </BaseScreen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '92%',
  },
  animatedContainer: {
    height: height / 4,
    justifyContent: 'space-around',
  },
});

export default SignIn;
