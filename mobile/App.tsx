import React, { useState } from 'react'
import { View } from 'react-native'
import Router from './src/router'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if (!isAuthenticated) {
    return (
      <View style={{ flex: 1 }}>
        <Router />
      </View>
    )
  }

  // redirect to home
  return <></>
}

export default App
