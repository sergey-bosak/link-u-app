import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Assets } from 'react-native-ui-lib';
import { PX } from '../../theme';

function BackButton({ goBack }) {
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={goBack}>
      <Image style={styles.icon} source={Assets.main.returnIcon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 185 * PX,
    height: 185 * PX,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
});

export default BackButton;
