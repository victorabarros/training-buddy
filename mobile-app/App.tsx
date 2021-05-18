import React, { useState } from 'react'
import SignUp from './src/screens/SignUp/index'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if (!isAuthenticated) {
    return <SignUp />
  }

  // redirect to home
  return <></>
}

export default App
