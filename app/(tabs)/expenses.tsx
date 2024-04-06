import { Link } from 'expo-router';
import { View, Text } from 'react-native';
const Expenses = () => {
  return (
    <View>
      <Link href={'/'}>
        <Text>Expenses</Text>
      </Link>
    </View>
  );
};
export default Expenses;
