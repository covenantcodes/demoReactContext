import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import UserProfileScreen from '../UserProfile';

const Stack = createStackNavigator();

const StackNavigator = ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{
                headerShown: false
            }}

        />
        <Stack.Screen 
            name="UserProfile" 
            component={UserProfileScreen} 
            options={{
                headerShown: false
            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;

