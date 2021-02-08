import React, { useEffect, useState } from 'react';
import { View } from 'react-native-ui-lib';
import {
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { PX } from '../../theme';
import ItemModal from '../ItemModal';

const { height, width } = Dimensions.get('screen');

type Item = {
  label: string;
  images: object[];
  description: string;
};

function ShopItem({ items }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeItem, setActiveItem] = useState({});
  useEffect(() => {});

  return (
    <View>
      <ItemModal
        visible={modalVisible}
        onRequestClose={setModalVisible}
        item={activeItem}
      />
      <Swiper
        cards={items}
        renderCard={(item: Item) => (
          <View style={styles.card}>
            <View style={styles.cardInnerContainer}>
              <Text style={styles.title}>{item.label}</Text>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                  setActiveItem(item);
                }}
                style={styles.imageContainer}
              >
                <Image source={item.images[0].image} style={styles.image} />
              </TouchableOpacity>
              <Text style={styles.description}>
                {item.description.length > 740
                  ? item.description.substring(0, 740 - 160) + '...'
                  : item.description}
              </Text>
            </View>
          </View>
        )}
        // overlayLabels={{
        //   left: {
        //     title: 'SKIP',
        //     style: {
        //       label: {
        //         backgroundColor: 'red',
        //         borderColor: 'black',
        //         color: 'white',
        //         borderWidth: 1
        //       },
        //       wrapper: {
        //         flexDirection: 'column',
        //         alignItems: 'center',
        //         justifyContent: 'center'
        //       }
        //     }
        //   },
        //   right: {
        //     title: 'ADD',
        //     style: {
        //       label: {
        //         backgroundColor: 'green',
        //         borderColor: 'black',
        //         color: 'white',
        //         borderWidth: 1
        //       },
        //       wrapper: {
        //         flexDirection: 'column',
        //         alignItems: 'center',
        //         justifyContent: 'center'
        //       }
        //     }
        //   }
        // }}
        animateOverlayLabelsOpacity
        swipeBackCard
        verticalSwipe={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: height <= 667 ? height / 1.1 : height / 1.4,
    overflow: 'hidden',
    marginTop: 750 * PX,
    marginHorizontal: 80 * PX,
    backgroundColor: 'transparent',
  },
  cardInnerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
  },
  shopItemLabel: {
    fontSize: 100 * PX,
    marginTop: 10,
    fontFamily: 'Lato',
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  contentContainer: {
    width: width <= 375 ? width / 2.3 : width / 1.65,
    height: 1200 * PX,
  },
  imageContainer: {
    width: width <= 375 ? width / 2.3 : width / 1.85,
    height: 1000 * PX,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 100 * PX,
    fontFamily: 'Karla',
    fontWeight: '800',
    marginTop: 80 * PX,
  },
  description: {
    fontSize: 70 * PX,
    padding: 15,
    fontFamily: 'Lato',
    lineHeight: 30,
    overflow: 'hidden',
    height: 250,
  },
  card: {
    flex: 1,
    height: height <= 667 ? height / 1.1 : height / 1.2,
    marginTop: 750 * PX,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
});

export default ShopItem;
