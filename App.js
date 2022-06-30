import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImageNavigator from './Navigator/ImageNavigator';
export default function App() {
  return (
    <View style={styles.container}>
      <ImageNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
