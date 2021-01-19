import React from 'react';
import { TouchableOpacity, Image, StyleSheet, View, Text } from 'react-native';
import { Assets } from 'react-native-ui-lib';
import { PX } from '../../theme';

function CartIcon({ count, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={Assets.main.basketIcon} />
      </View>
      <View style={styles.countContainer}>
        <Text style={styles.countLabel}>{count}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fff',
    height: 210 * PX,
    padding: 10,
  },
  iconContainer: {
    width: 135 * PX,
    height: 135 * PX,
    marginBottom: 100 * PX,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  countContainer: {
    position: 'absolute',
    borderWidth: 0.5,
    borderColor: '#fff',
    left: 45,
    top: -10,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 85 * PX,
    height: 85 * PX,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countLabel: {
    fontSize: 45 * PX,
  },
});

export default CartIcon;
