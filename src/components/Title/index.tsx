import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-ui-lib';

type TitleTypes = {
  label: string;
  width?: number | string;
  fontSize?: number;
  style?: object;
};

const Title = ({ label, width, fontSize, style }: TitleTypes) => {
  return (
    <Text center style={[styles.headerTitle, { width, fontSize }, style]}>
      {label}
    </Text>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: 'Karla',
    borderWidth: 2,
    padding: 10,
  },
});

Title.defaultProps = {
  label: 'Label',
  width: '50%',
  fontSize: 40,
};

export default Title;
