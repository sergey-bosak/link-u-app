import React from 'react';
import { StyleSheet } from 'react-native';
import {Text} from "react-native-ui-lib";

type TitleTypes = {
  label: string;
  width?: number | string;
}

const Title = ({ label, width }: TitleTypes) => {
  return <Text center text20 style={[styles.headerTitle, { width: width }]}>{label}</Text>;
};

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: 'Karla',
    borderWidth: 2,
  }
});

Title.defaultProps = {
  label: 'Label',
  width: '50%'
}

export default Title;
