import React, { useEffect } from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,

  elevation: 4,
};

// So that it stretches in landscape mode.
const width = Dimensions.get('screen').width - 32;

type PropTypes = {
  tabs: string[];
  onTabPress: (index: number) => void;
  currentIndex: number;
  segmentedControlBackgroundColor: string;
  activeSegmentBackgroundColor: string;
  paddingVertical: number;
  textColor: string;
  activeTextColor: string;
};

const SegmentedControl = ({
  currentIndex,
  activeTextColor,
  textColor,
  activeSegmentBackgroundColor,
  paddingVertical,
  onTabPress,
  segmentedControlBackgroundColor,
  tabs,
}: PropTypes) => {
  const translateValue = (width - 4) / tabs?.length;
  const [tabTranslate, setTabTranslate] = React.useState(new Animated.Value(0));

  // useCallBack with an empty array as input, which will call inner lambda only once and memoize the reference for future calls
  const memoizedTabPressCallback = React.useCallback((index: number) => {
    onTabPress(index);
  }, []);

  useEffect(() => {
    // Animating the active index based current index
    Animated.spring(tabTranslate, {
      toValue: currentIndex * translateValue,
      stiffness: 180,
      damping: 20,
      mass: 1,
      useNativeDriver: true,
    }).start();
  }, [currentIndex]);

  return (
    <Animated.View
      style={[
        styles.segmentedControlWrapper,
        {
          backgroundColor: segmentedControlBackgroundColor,
        },
        {
          paddingVertical: paddingVertical,
        },
      ]}
    >
      <Animated.View
        style={[
          {
            position: 'absolute',
            width: (width - 4) / tabs?.length,
            top: 0,
            bottom: 0,

            marginVertical: 2,
            marginHorizontal: 2,
            backgroundColor: activeSegmentBackgroundColor,
            borderRadius: 8,
            ...shadow,
          },
          {
            transform: [
              {
                translateX: tabTranslate,
              },
            ],
          },
        ]}
      ></Animated.View>
      {tabs.map((tab, index) => {
        const isCurrentIndex = currentIndex === index;
        return (
          <TouchableOpacity
            style={[styles.textWrapper]}
            onPress={() => memoizedTabPressCallback(index)}
            activeOpacity={0.7}
          >
            <Text
              numberOfLines={1}
              style={[
                styles.textStyles,
                isCurrentIndex
                  ? { color: activeTextColor }
                  : { color: textColor },
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        );
      })}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  segmentedControlWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    width: width,
    marginVertical: 20,
  },
  textWrapper: {
    flex: 1,
    elevation: 9,
    paddingHorizontal: 5,
    justifyContent: 'center',
  },
  textStyles: {
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '600',
  },
});

export default SegmentedControl;
