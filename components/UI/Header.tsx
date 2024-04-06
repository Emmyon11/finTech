import Colors from '@/constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, Image, StyleSheet } from 'react-native';

type PropType = {
  name: string;
  imageSource: string | number;
};
const Header = ({ name, imageSource }: PropType) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSec}>
        <View style={styles.imageContainer}>
          <Image source={imageSource as number} style={styles.image} />
        </View>
        <View>
          <Text style={styles.greetings}>Hey there!</Text>
          <Text style={styles.title}>{name}</Text>
        </View>
      </View>

      <View>
        <MaterialIcons name="notifications" size={24} color={Colors.gray} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.dark.background,
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 10,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: Colors.white,
  },
  leftSec: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  image: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.lightBrown,
  },
  greetings: {
    color: Colors.gray,
  },
});
export default Header;
