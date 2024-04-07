import SegmentedControl from '@/components/UI/SegmentedTab';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Index = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };
  return (
    <View style={styles.container}>
      <SegmentedControl
        tabs={['Day', 'Week', 'Month']}
        currentIndex={tabIndex}
        onTabPress={handleTabsChange}
        segmentedControlBackgroundColor="#E5E5E9"
        activeSegmentBackgroundColor="#FFFFFF"
        activeTextColor="black"
        textColor="black"
        paddingVertical={18}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Index;
