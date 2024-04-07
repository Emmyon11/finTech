import Colors from '@/constants/Colors';
import { useAssets } from 'expo-asset';
import { ResizeMode, Video } from 'expo-av';
import { Link } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
const Index = () => {
  const [assets] = useAssets([require('@/assets/videos/intro.mp4')]);

  return (
    <View style={styles.container}>
      {assets && (
        <Video
          isLooping
          resizeMode={ResizeMode.COVER}
          isMuted
          shouldPlay
          source={{ uri: assets[0].uri }}
          style={styles.video}
        />
      )}
      <View style={{ marginTop: 80, padding: 20 }}>
        <Text style={styles.header}>ready to change the way you money?</Text>
      </View>
      <Link href={'/(tabs)/home'} asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.bText}>Login</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  header: {
    fontSize: 30,
    fontWeight: '900',
    textTransform: 'uppercase',
    color: 'white',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 60,
    padding: 20,
    backgroundColor: Colors.primary,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  bText: {
    color: Colors.dark.text,
    fontSize: 17,
  },
});
export default Index;
