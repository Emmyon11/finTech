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
          <View style={[styles.iconContainer, { backgroundColor: color }]}>
            <MaterialIcons color={color} name={materialIconName} size={24} />
          </View>

          <Text style={styles.title}>{title}</Text>
        </View>

        <Text style={[styles.amount, amount < 0 && { color: '#E1392E' }]}>
          {amount}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.foreground,
    padding: 10,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#1E1D22',
    borderRadius: 5,
  },
  listTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconContainer: {
    width: 36,
    height: 36,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  title: {
    color: Colors.gray,
    fontSize: 25,
    fontWeight: '600',
  },

  amount: {
    fontSize: 25,
    fontWeight: '600',
    color: 'green',
  },
});
export default ListItem;
