import React, { useState } from 'react'
import { View } from 'react-native'
import SignUpStack from './src/router/SignUpStack'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if (!isAuthenticated) {
    return (
      <View style={{flex: 1}}>
        <SignUpStack />
      </View>
    )
  }

  // redirect to home
  return <></>
}

export default App
