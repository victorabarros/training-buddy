import React, { useState } from 'react'
import SignUp from './screens/SignUp/index'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  return isAuthenticated ? <SignUp /> : <></>
}

export default App
