import { accountData } from '@/utils/dataGen';
import * as React from 'react';
import { Dimensions, Pressable, Text, View } from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';

const PAGE_WIDTH = Dimensions.get('screen').width;

function BalanceScroll() {
  const [isAutoPlay, setIsAutoPlay] = React.useState(false);
  const animationStyle = React.useCallback((value: number) => {
    'worklet';

    const zIndex = interpolate(value, [-1, 0, 1], [-1000, 0, 1000]);
    const translateX = interpolate(value, [-1, 0, 1], [0, 0, PAGE_WIDTH]);

    return {
      transform: [{ translateX }],
      zIndex,
    };
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <Carousel
        loop={true}
        autoPlay={isAutoPlay}
        style={{ width: PAGE_WIDTH, height: 280 }}
        width={PAGE_WIDTH}
        data={accountData}
        renderItem={({ index, animationValue, item }) => {
          return (
            <CustomItem
              item={item}
              key={index}
              index={index}
              animationValue={animationValue}
            />
          );
        }}
        customAnimation={animationStyle}
        scrollAnimationDuration={1200}
      />
    </View>
  );
}

interface ItemProps {
  index: number;
  animationValue: Animated.SharedValue<number>;
  item: {
    id: number;
    accountType: string;
    accountBalance: number;
  };
}
const CustomItem: React.FC<ItemProps> = ({ index, animationValue, item }) => {
  const maskStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animationValue.value,
      [-1, 0, 1],
      ['#000000dd', 'transparent', '#000000dd']
    );

    return {
      backgroundColor,
    };
  }, [animationValue]);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Pressable>
        <View>
          <Text>{item.accountType}</Text>
        </View>
      </Pressable>
      <Animated.View
        pointerEvents="none"
        style={[
          {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
          maskStyle,
        ]}
      />
    </View>
  );
};

export default BalanceScroll;
