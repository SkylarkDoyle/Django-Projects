import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import PageNotFound from '../../page-not-found'

/**
 * pages
 */

import { Login, Register } from '../pages'

const AuthRoute = () => (
  <Switch>
    <Route exact path="/auth/register" component={Register} />
    <Route exact path="/auth/login" component={Login} />
    <Redirect to="/auth/login" from="/auth" />
    <Route component={PageNotFound} />{' '}
  </Switch>
)

export default AuthRoute
