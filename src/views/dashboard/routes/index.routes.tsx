import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PageNotFound from '../../page-not-found'

/**
 * pages
 */

import { Home } from '../pages'

const DashboardRoute = () => (
  <Switch>
    <Route exact path="/dashboard/home/:location" component={Home} />
    <Route component={PageNotFound} />
    {' '}
  </Switch>
)

export default DashboardRoute
