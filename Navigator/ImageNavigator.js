import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ImageScreen from '../screens/ImageScreen';
import SingleImageScreen from '../screens/SingleImageScreen';
const Stack = createStackNavigator();

function ImageNavigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={ HomeScreen} 
    
    options={({ navigation ,route}) => ({
      headerShown: false,
      
  })}
    />
     <Stack.Screen name="ImageScreen" 
     component={ImageScreen} 
     //disable the header because we made our own header component
     options={({ navigation ,route}) => ({
      headerShown: false,
      
  })}
     />
     
     <Stack.Screen name="singleImage" component={ SingleImageScreen} 
    
    options={({ navigation ,route}) => ({
      headerShown: false,
      
  })}
    />
      
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default ImageNavigator