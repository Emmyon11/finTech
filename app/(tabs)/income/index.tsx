import ListItem from '@/components/UI/ListItem';
import SegmentedControl from '@/components/UI/SegmentedTab';
import Colors from '@/constants/Colors';
import { dataItem } from '@/utils/dataGen';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
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
        segmentedControlBackgroundColor="#232023"
        activeSegmentBackgroundColor="#333333"
        activeTextColor="#C5C6D0"
        textColor={Colors.gray}
        paddingVertical={18}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={dataItem}
          style={{
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
          renderItem={({ item }) => (
            <ListItem
              amount={item.amount}
              color={item.color}
              materialIconName={item.materialIconName}
              title={item.title}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
});
export default Index;
