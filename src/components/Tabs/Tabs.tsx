import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Dimensions,
  Text,
  Animated,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { PX } from '../../theme';
import CartIcon from '../CartIcon';
import BackButton from '../BackButton';

const { width, height } = Dimensions.get('screen');

type Tab = {
  item: any;
  data: any;
  onItemPress: () => any;
};

const Tab = React.forwardRef(({ item, data, onItemPress }: Tab, ref) => {
  return (
    <TouchableOpacity onPress={onItemPress}>
      <View ref={ref}>
        <Text
          style={{
            color: 'white',
            fontSize: 84 / data.length,
            fontWeight: '800',
          }}
        >
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
});

const Indicator = ({ measures, scrollX, data }) => {
  const inputRange = data.map((_, index) => index * width);
  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.width),
  });
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.x),
  });

  return (
    <Animated.View
      style={{
        position: 'absolute',
        height: 4,
        width: indicatorWidth,
        transform: [{ translateX }],
        left: 0,
        backgroundColor: 'white',
        bottom: -10,
      }}
    />
  );
};

function Tabs({ data, scrollX, onItemPress, goBack, navigate }) {
  const [measures, setMeasures]: any = useState([]);
  const containerRef = useRef();
  useEffect(() => {
    let m: [any?] = [];
    data.forEach((item) => {
      item.ref.current.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          m.push({
            x,
            y,
            width,
            height,
          });

          if (m.length === data.length) {
            setMeasures(m);
          }
        }
      );
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topIconsContainer}>
        <BackButton goBack={goBack} />
        <CartIcon onPress={navigate} count={12} />
      </View>
      <View
        ref={containerRef}
        style={{
          justifyContent: 'space-evenly',
          width,
          flex: 1,
          flexDirection: 'row',
        }}
      >
        {data.map((item, index) => {
          return (
            <View key={index}>
              <Tab
                data={data}
                key={item.key}
                item={item}
                ref={item.ref}
                onItemPress={() => onItemPress(index)}
              />
            </View>
          );
        })}
      </View>
      {measures.length > 0 && (
        <Indicator data={data} measures={measures} scrollX={scrollX} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: height / 16,
  },
  topIconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 130 * PX,
    marginBottom: 100 * PX,
  },
});

export default Tabs;
