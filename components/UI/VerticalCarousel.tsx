import Colors from '@/constants/Colors';
import { accountData } from '@/utils/dataGen';
import * as React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';

const PAGE_WIDTH = Dimensions.get('window').width;
const colors = [
  '#26292E',
  '#899F9C',
  '#B3C680',
  '#5C6265',
  '#F5D399',
  '#F1F1F1',
];

function VerticalCarousel() {
  const [isVertical, setIsVertical] = React.useState(true);
  const [autoPlay, setAutoPlay] = React.useState(false);
  const [pagingEnabled, setPagingEnabled] = React.useState<boolean>(true);
  const [snapEnabled, setSnapEnabled] = React.useState<boolean>(true);
  const progressValue = useSharedValue<number>(0);

  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        padding: 2,
      }}
    >
      <Carousel
        {...{
          vertical: true,
          width: PAGE_WIDTH * 0.8,
          height: PAGE_WIDTH * 0.5,
        }}
        style={{
          width: PAGE_WIDTH,
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
        loop
        snapEnabled={true}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        data={accountData}
        renderItem={({ index, item }) => <CustomItem item={item} />}
      />
    </View>
  );
}

type ItemProp = {
  item: {
    id: number;
    accountType: string;
    accountBalance: number;
  };
};

const CustomItem = ({ item }: ItemProp) => {
  return (
    <View style={styles.containerMain}>
      <Text style={styles.headingText}>{item.accountType}</Text>
      <Text
        style={[
          styles.titleText,
          item.accountBalance < 0 && { color: '#FF5733' },
        ]}
      >
        {item.accountBalance}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,

    opacity: 0.6,
    borderRadius: 10,
    borderColor: Colors.gray,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Transparent white color

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headingText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  titleText: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default VerticalCarousel;
