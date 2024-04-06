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
import BalanceScroll from '@/components/UI/BalanceScroll';

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
        <BalanceScroll />
      </View>

      <View>
        <FlatList
          data={dataItem}
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
  carousel: {
    height: Dimensions.get('window').height / 4,
  },
});
export default Home;
