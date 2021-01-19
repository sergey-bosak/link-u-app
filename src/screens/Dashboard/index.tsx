import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import BaseScreen from '../../components/BaseScreen';
import Carousel from '../../components/Carousel';
import Title from '../../components/Title';
import { PX } from '../../theme';
import { Assets } from 'react-native-ui-lib';

const Dashboard = ({ navigation }) => {
  return (
    <BaseScreen style={styles.baseScreen}>
      <Title label="Welcome" width={'60%'} fontSize={24} />
      <Text style={styles.topSalesLabel}>Top sales</Text>
      <Carousel />
      <TouchableOpacity
        style={styles.linkContainer}
        onPress={() => navigation.navigate('Store')}
      >
        <Text style={styles.linkLabel}>Check out our store</Text>
        <Image style={styles.chevron} source={Assets.main.chevronIcon} />
      </TouchableOpacity>
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  baseScreen: {
    display: 'flex',
    alignItems: 'center',
  },
  topSalesLabel: {
    marginTop: 30,
    fontSize: 24,
    fontFamily: 'Karla',
  },
  linkLabel: {
    fontFamily: 'Karla',
    fontSize: 90 * PX,
    marginRight: 10,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60 * PX,
  },
  chevron: {
    marginTop: 5,
  },
});

export default Dashboard;
