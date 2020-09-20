import React, {ReactElement} from 'react';
import {View} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

type BackgroundTypes = {
  children: ReactElement;
};

const Background = ({children}: BackgroundTypes) => {
  return (
    <>
      <LinearGradient
        colors={['#8AD4FF', '#fff']}
        start={[0, 1.3]}
        end={[0, 0]}
        style={styles.gradient}
      />
      <View style={styles.fullSize}>
        {children}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  fullSize: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Background;
