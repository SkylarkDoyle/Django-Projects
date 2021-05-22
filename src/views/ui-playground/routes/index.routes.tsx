import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PageNotFound from '../../page-not-found'

/**
 * pages
 */

import { Playground } from '../pages'

const UIPlaygroundRoute = () => (
  <Switch>
    <Route path="/" component={Playground} />
    <Route component={PageNotFound} />{' '}
  </Switch>
)

export default UIPlaygroundRoute
