import React from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import { Assets } from 'react-native-ui-lib';
import { PX } from '../../theme';

function ItemModal({ onRequestClose, visible, item }) {
  return (
    <Modal
      visible={visible}
      transparent
      animated="slide"
      swipeDirection="top"
      onSwipeComplete={() => onRequestClose(!visible)}
    >
      <View
        style={[
          StyleSheet.absoluteFillObject,
          styles.container,
          { backgroundColor: '#fff' },
        ]}
      >
        <TouchableOpacity
          style={styles.closeIconContainer}
          onPress={() => onRequestClose(!visible)}
        >
          <Image style={styles.img} source={Assets.main.closeIcon} />
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.title}>{item.label}</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            data={item.images}
            keyExtractor={(item) => item.key}
            style={styles.flatList}
            renderItem={({ item }) => (
              <View style={styles.imageContainer}>
                <Image style={styles.img} source={item.image} />
              </View>
            )}
          />
          <Text style={styles.imagesLabel}>
            {item.images && item.images.length} images
          </Text>
          <Text style={styles.description}>{item.description}</Text>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 830 * PX,
    borderRadius: 18,
    flex: 1,
  },
  closeIconContainer: {
    width: 170 * PX,
    height: 170 * PX,
    marginTop: 60 * PX,
    marginRight: 50 * PX,
    alignSelf: 'flex-end',
  },
  img: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  imageContainer: {
    width: 250,
    height: 1000 * PX,
  },
  flatList: {
    width: '60%',
  },
  title: {
    fontSize: 100 * PX,
    fontFamily: 'Karla',
    fontWeight: '800',
    marginVertical: 100 * PX,
  },
  imagesLabel: {
    fontSize: 70 * PX,
    fontFamily: 'Karla',
    fontWeight: '800',
    marginTop: 40 * PX,
  },
  description: {
    fontSize: 70 * PX,
    padding: 15,
    fontFamily: 'Lato',
    lineHeight: 30,
    overflow: 'hidden',
    marginHorizontal: 40 * PX,
    marginBottom: 150 * PX,
  },
});

export default ItemModal;
