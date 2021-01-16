import React, { ReactElement } from 'react';
import { View } from 'react-native-ui-lib';
import { Dimensions, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('screen');

type BackgroundTypes = {
  children: ReactElement;
  gradient?: string[];
};

function Background({ children, gradient }: BackgroundTypes) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={gradient}
        start={[0, 1.3]}
        end={[0, 0]}
        style={styles.gradient}
      />
      <View style={styles.fullSize}>{children}</View>
    </View>
  );
}

Background.defaultProps = {
  gradient: ['#8AD4FF', '#fff'],
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullSize: {
    width,
    height,
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
