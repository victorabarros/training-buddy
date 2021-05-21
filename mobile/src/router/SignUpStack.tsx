import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileChoicer from '../screens/SignUp/ProfileChoicer'
import { NavigationContainer } from '@react-navigation/native'
import LogIn from '../screens/SignUp/LogIn'
import Research from '../screens/SignUp/Research'

const Stack = createStackNavigator()

const SignUpStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="ProfileChoicerScreen">
      <Stack.Screen component={ProfileChoicer} name="ProfileChoicerScreen" />
      <Stack.Screen component={LogIn} name="LogInScreen" />
      <Stack.Screen component={Research} name="ResearchScreen" />
    </Stack.Navigator>
  )
}

export default SignUpStack
