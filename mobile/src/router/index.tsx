import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import SignUpStack from './SignUpStack'
import BottomTabNav from './BottomTabNav'

const Router = () => {
  const Drawer = createDrawerNavigator()

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="SignUp" component={SignUpStack} />
        <Drawer.Screen name="BottomTab" component={BottomTabNav} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Router
