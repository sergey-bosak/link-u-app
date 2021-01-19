import React, { Fragment } from 'react';
import { View } from 'react-native-ui-lib';
import { Text, StyleSheet, Dimensions, Image, FlatList } from 'react-native';
import { PX } from '../../theme';

const { height } = Dimensions.get('screen');

type Item = {
  label: string;
  images: object[];
  description;
};

function ShopItem({ items }) {
  return (
    <View style={styles.container}>
      {items.map((item: Item, index) => (
        <Fragment key={index}>
          <Text style={styles.shopItemLabel}>{item.label}</Text>
          <View style={styles.flatListContainer}>
            <FlatList
              bounces={false}
              data={item.images}
              pagingEnabled
              keyExtractor={(item: any) => item.key}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                  <Image source={item.image} style={styles.image} />
                </View>
              )}
            />
          </View>
          <Text style={styles.description}>{item.description}</Text>
        </Fragment>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 750 * PX,
    borderWidth: 3,
    borderRadius: 3,
    opacity: 1,
    borderColor: '#fff',
    marginHorizontal: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    height: height / 1.45,
    display: 'flex',
    alignItems: 'center',
  },
  shopItemLabel: {
    fontSize: 100 * PX,
    marginTop: 10,
    fontFamily: 'Lato',
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  flatListContainer: {
    width: 900 * PX,
    height: 1200 * PX,
  },
  imageContainer: {
    width: 900 * PX,
    height: 1200 * PX,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
  },
  description: {
    fontSize: 70 * PX,
    padding: 15,
    fontFamily: 'Lato',
  },
});

export default ShopItem;
