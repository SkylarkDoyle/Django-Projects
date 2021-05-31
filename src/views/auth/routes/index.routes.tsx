import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { RootStackParamListType } from '../../../shared/typings'
import PageNotFound from '../../page-not-found'

/**
 * pages
 */

import { Login, Register, ForgotPassword, ResetPassword, AddBusiness } from '../pages'
import { AuthLayout } from '../../../shared/layout'






/* this handles routes that do not require a layout */
// export const PageRoutes: RootStackParamListType ={
//   Login: {
//     path: '/auth/login',
//     component: Login,
//     exact: true,
//   },
// }


/* this handles all routes */
export const BuildRoutes: RootStackParamListType = {
  Login: {
    path: '/auth/login',
    component: Login,
    exact: true,
  },
  Register: {
    path: '/auth/register',
    component: Register,
    exact: true,
  },
  AddBusiness: {
    path: '/auth/addbusiness',
    component: AddBusiness,
    exact: true,
  },
  ForgotPassword: {
    path: '/auth/forgotpassword',
    component: ForgotPassword,
    exact: true,
  },
  ResetPassword: {
    path: '/auth/newpassword',
    component: ResetPassword,
    exact: true,
  },
 }
const AuthRoute = () => (
  <Switch>
    <AuthLayout>
      <Switch>
      {(Object.keys(BuildRoutes) as (keyof typeof BuildRoutes)[]).map((name) => (
        <Route key={name} {...BuildRoutes[name]} />
      ))}
        <Redirect to="/auth/login" from="/auth" />
      </Switch>
    </AuthLayout>
    <Route component={PageNotFound} />{' '}
  </Switch>
)

export default AuthRoute
