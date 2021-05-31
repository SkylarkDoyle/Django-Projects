import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { RootStackParamListType } from '../shared/typings'


/* pages */
import { AuthRoute as Auth } from '../views/auth'
import { HomeRoute as Home } from '../views/home'
import { UIPlaygroundRoute as UIPlayground } from '../views/ui-playground'




/* this handles routes that do not require a layout */
export const PageRoutes: RootStackParamListType ={
  Home: {
    path: '/',
    component: Home,
    exact: true,
  },
}


/* this handles routes that do not require a layout */
export const LayoutRoutes: RootStackParamListType ={
  Auth: {
    path: '/auth',
    component: Auth,
    exact: false,
  },
}

/* this handles all routes */
export const BuildRoutes: RootStackParamListType = {
 ...PageRoutes,
 ...LayoutRoutes,
  UI: {
    path: '/ui-playground',
    component: UIPlayground,
    exact: false,
  },
}

function Routes() {
  return (
    <Switch>
      {(Object.keys(BuildRoutes) as (keyof typeof BuildRoutes)[]).map((name) => (
        <Route key={name} {...BuildRoutes[name]} />
      ))}
    </Switch>
  )
}
export default Routes
