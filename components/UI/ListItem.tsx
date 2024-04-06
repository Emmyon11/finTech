import Colors from '@/constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

type PropsType = {
  title: string;
  amount: number;
  color: string;
  materialIconName: keyof typeof MaterialIcons.glyphMap;
};
const ListItem = ({ amount, color, materialIconName, title }: PropsType) => {
  return (
    <View style={styles.container}>
      <View style={styles.listItem}>
        <View style={styles.listTitle}>
          <MaterialIcons color={color} name={materialIconName} size={24} />
          <Text style={styles.title}>{title}</Text>
        </View>

        <Text style={styles.amount}>{amount}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    padding: 10,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: Colors.lightBrown,
    borderRadius: 5,
  },
  listTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
  },

  amount: {
    fontSize: 25,
    fontWeight: '600',
    color: 'red',
  },
});
export default ListItem;
