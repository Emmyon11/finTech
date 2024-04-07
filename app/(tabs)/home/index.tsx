import Header from '@/components/UI/Header';
import ListItem from '@/components/UI/ListItem';
import Colors from '@/constants/Colors';
import { dataItem } from '@/utils/dataGen';
import headerImag from '@/assets/images/adaptive-icon.png';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import VerticalCarousel from '@/components/UI/VerticalCarousel';

const Home = () => {
  return (
    <View
      style={[
        styles.container,
        Platform.OS == 'android' && { marginTop: StatusBar.currentHeight },
      ]}
    >
      <View style={styles.headerContainer}>
        <Header imageSource={headerImag} name="emmanuel" />
      </View>
      <View style={styles.carousel}>
        <VerticalCarousel />
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={dataItem}
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
          renderItem={(data) => (
            <ListItem
              amount={data.item.amount}
              color={data.item.color}
              materialIconName={data.item.materialIconName}
              title={data.item.title}
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
    marginTop: StatusBar.currentHeight,
    backgroundColor: Colors.dark.background,
  },
  headerContainer: {
    height: 150,
  },
  listContainer: {
    padding: 10,
    paddingBottom: 0,
    flex: 1,
  },
  carousel: {
    height: 200,
  },
});
export default Home;
