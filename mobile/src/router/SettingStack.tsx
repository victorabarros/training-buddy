import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MarketHome from '../screens/Market/Home'
import SettingView from '../screens/Setting'

const Stack = createStackNavigator()

const SettingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SettingViewScreen">
      <Stack.Screen component={SettingView} name="SettingViewScreen" />
      {/* <Stack.Screen component={UpdateProfile} name="UpdateProfileScreen" />
        <Stack.Screen component={UpdatePassword} name="UpdatePasswordScreen" /> */}
    </Stack.Navigator>
  )
}

export default SettingStack
