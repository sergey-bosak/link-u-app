import React, {useCallback, useRef} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
  Image,
  Text, ImageBackground,
} from 'react-native';
import Tabs from "./Tabs";
import {PX} from "../../theme";

const { width, height } = Dimensions.get('screen');

type Images = {
  [key: string]: string;
}

const images: Images = {
  man:
    'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  women:
    'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  kids:
    'https://images.pexels.com/photos/5080167/pexels-photo-5080167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  skullcandy:
    'https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  help:
    'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
};

const description = {
  man: 'docs',
  women: 'videos',
  kids: 'pages',
  skullcandy: 'gifs',
  help: 'links',
}
const data = Object.keys(images).map((i) => ({
  key: i,
  title: i,
  image: images[i],
  ref: React.createRef(),
  description: description[i],
}));

function AnimatedTabs() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const ref: any = useRef();
  const onItemPress = useCallback((itemIndex) => {
    ref?.current?.scrollToOffset({
      offset: itemIndex * width,
    })
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
        bounces={false}
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {x: scrollX}}}], { useNativeDriver: false })}
        renderItem={({item}) => {
          return (
            <ImageBackground source={{ uri: item.image }} style={{ width, height }}>
              <Text style={{ marginTop: height / 5 }}>{item.description}</Text>
              <View style={[StyleSheet.absoluteFillObject, { backgroundColor: 'rgba(0, 0, 0, 0.3)' }]} />
            </ImageBackground>
          );
        }}
      />
      <Tabs onItemPress={onItemPress} scrollX={scrollX} data={data} />
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
