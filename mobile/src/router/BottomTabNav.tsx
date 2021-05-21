import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import Entypo from 'react-native-vector-icons/Entypo';
import MarketStack from './MarketStack'

const Tab = createBottomTabNavigator()

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={
        {
          // showLabel: false,
          // inactiveTintColor: '#ffbd7d',
          // activeTintColor: '#e47911',
        }
      }
    >
      <Tab.Screen
        component={MarketStack}
        name="market"
        // options={{
        //   tabBarIcon: ({color}) => (
        //     <Entypo name="home" color={color} size={25} />
        //   ),
        // }}
      />
      {/*
      <Tab.Screen
        component={SettingsStack}
        name="settings"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="user" color={color} size={25} />
          ),
        }}
      />*/}
    </Tab.Navigator>
  )
}

export default BottomTabNav
