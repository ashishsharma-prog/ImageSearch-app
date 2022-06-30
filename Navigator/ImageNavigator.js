import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ImageScreen from '../screens/ImageScreen';
const Stack = createStackNavigator();

function ImageNavigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ HomeScreen} />
      <Stack.Screen name="ImageScreen" component={ImageScreen} />
      
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default ImageNavigator