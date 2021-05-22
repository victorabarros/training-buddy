import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Entypo from 'react-native-vector-icons/Entypo'
import MarketStack from './MarketStack'
import SettingStack from './SettingStack'

const Tab = createBottomTabNavigator()

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        // inactiveTintColor: '#ffbd7d',
        activeTintColor: '#105492',
      }}
    >
      <Tab.Screen
        component={MarketStack}
        name="market"
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" color={color} size={30} />,
        }}
      />

      <Tab.Screen
        component={SettingStack}
        name="setting"
        options={{
          tabBarIcon: ({ color }) => <Entypo name="menu" color={color} size={30} />,
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNav
