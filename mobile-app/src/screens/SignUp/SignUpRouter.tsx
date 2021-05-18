import React from 'react'
import { Route, Switch } from 'react-router-native'
import LogIn from './LogIn'
import ProfileChoicer from './ProfileChoicer'

const SignUpRouter: React.FC = () => (
  <>
    <Switch>
      <Route path="/signup/profile">
        <ProfileChoicer />
      </Route>
      <Route path="/signup/login">
        <LogIn />
      </Route>
    </Switch>
  </>
)

export default SignUpRouter
