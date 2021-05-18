import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileChoicer from '../screens/SignUp/ProfileChoicer';
import { NavigationContainer } from '@react-navigation/native';
import LogIn from '../screens/SignUp/LogIn';

const Stack = createStackNavigator();

const SignUpStack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={ProfileChoicer} name="ProfileChoicerScreen" />
      <Stack.Screen component={LogIn} name="LogInScreen" />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignUpStack;
