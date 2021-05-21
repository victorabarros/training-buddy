import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MarketHome from '../screens/Market/Home'

const Stack = createStackNavigator()

const MarketStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="MarketHomeScreen">
      <Stack.Screen component={MarketHome} name="MarketHomeScreen" />
      {/* <Stack.Screen component={MarketSearch} name="MarketSearchScreen" />
        <Stack.Screen component={MarketMostSearcheds} name="MarketMostSearchedsScreen" /> */}
    </Stack.Navigator>
  )
}

export default MarketStack
