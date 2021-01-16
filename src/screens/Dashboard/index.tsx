import React from 'react';
import { StyleSheet, Text } from 'react-native';
import BaseScreen from '../../components/BaseScreen';
import Carousel from '../../components/Carousel';
import Title from '../../components/Title';

const Dashboard = () => {
  return (
    <BaseScreen style={styles.baseScreen}>
      <Title label="Welcome" width={'60%'} fontSize={24} />
      <Text style={styles.topSalesLabel}>Top sales</Text>
      <Carousel />
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
    fontSize: 20,
  },
});

export default Dashboard;
