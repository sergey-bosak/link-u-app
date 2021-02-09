import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Assets } from 'react-native-ui-lib';
import BackButton from '../../components/BackButton';
import { PX } from '../../theme';
import Background from '../../components/Background';

const { height } = Dimensions.get('screen');

const items = [
  {
    label: 'Dog chain',
    image: Assets.main.dogChain,
  },
];

function Cart({ navigation }) {
  return (
    <Background gradient={['#8AD4FF', '#000']}>
      <View style={styles.container}>
        <View style={styles.backButtonContainer}>
          <BackButton goBack={() => navigation.goBack()} />
        </View>
        <Text style={styles.title}>Cart</Text>
        <ScrollView
          contentContainerStyle={{ alignItems: 'center' }}
          style={styles.itemsContainer}
        >
          {items.map((item) => (
            <View>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={item.image} />
              </View>
              <Text style={styles.itemLabel}>{item.label}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 130 * PX,
  },
  backButtonContainer: {
    marginTop: height / 16,
    marginBottom: 30 * PX,
  },
  imageContainer: {
    width: 600 * PX,
    height: 600 * PX,
    marginVertical: 200 * PX,
  },
  title: {
    fontFamily: 'Lato',
    fontSize: 160 * PX,
    color: '#fff',
    textAlign: 'center',
  },
  itemsContainer: {
    borderRadius: 30,
    backgroundColor: '#fff',
    height: height / 1.3,
    marginTop: 60 * PX,
    display: 'flex',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
  },
  itemLabel: {
    textAlign: 'center',
  },
});

export default Cart;
