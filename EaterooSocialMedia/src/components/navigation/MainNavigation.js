import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../../screens/authentication/LoginScreen';
import MainAuthScreen from '../../screens/authentication/MainAuthScreen';
import RegisterScreen from '../../screens/authentication/RegisterScreen';
import HomeScreen from '../../screens/home/HomeScreen';
import MainHeader from '../../atoms/Header/MainHeader';
const Stack = createNativeStackNavigator();
export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{header: props => <MainHeader {...props} />}}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
