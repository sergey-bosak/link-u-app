import React, { useCallback, useRef } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
  ImageBackground,
} from 'react-native';
import Tabs from './Tabs';
import { Assets } from 'react-native-ui-lib';
import ShopItem from '../ShopItem';
import { petsItems } from './content';
import PlusMinusIcon from '../PlusMinusIcon';

const { width, height } = Dimensions.get('screen');

type Images = {
  [key: string]: string;
};

const images: Images = {
  man: Assets.main.manBackground,
  women: Assets.main.womanBackground,
  kids: Assets.main.kidBackground,
  pets: Assets.main.dogBackground,
  house: Assets.main.houseBackground,
};

const shopItems = {
  man: <ShopItem items={petsItems} />,
  women: <ShopItem items={petsItems} />,
  kids: <ShopItem items={petsItems} />,
  pets: <ShopItem items={petsItems} />,
  house: <ShopItem items={petsItems} />,
};
const data = Object.keys(images).map((i) => ({
  key: i,
  title: i,
  image: images[i],
  ref: React.createRef(),
  categoriesItems: shopItems[i],
}));

function AnimatedTabs({ goBack, navigate }) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const ref: any = useRef();
  const onItemPress = useCallback((itemIndex) => {
    ref?.current?.scrollToOffset({
      offset: itemIndex * width,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={ref}
        data={data}
        keyExtractor={(item) => item.key}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        scrollEnabled={false}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => {
          return (
            <ImageBackground source={item.image} style={{ width, height }}>
              <View>{item.categoriesItems}</View>
            </ImageBackground>
          );
        }}
      />
      <Tabs
        onItemPress={onItemPress}
        scrollX={scrollX}
        data={data}
        goBack={goBack}
        navigate={navigate}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AnimatedTabs;
