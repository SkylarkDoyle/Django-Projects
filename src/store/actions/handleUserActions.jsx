import { handleThenSuccess, handleCatchError } from '../../shared/tools'
import { HTTP } from '../../services'
import type from '../type'

/**
 * types for reducer action
 */
const { LOGIN_DATA } = type

/**
 * @name handleSetUser
 * @description redux action function passes payload and action for reducer
 * @param {Object} payload
 * @return {NUll} null
 */
const handleSetUser = (payload) => ({
  type: LOGIN_DATA,
  payload,
})

/**
 * @name handleUserRegister
 * @description  function handles user registration
 * @param {Object} data
 * @return {Promise<{result: AxiosResponse<Object>}>} user object from backend
 */
export const handleUserRegister = (data) => (dispatch) =>
  HTTP.baseApi()
    .post('/auth/user/register', data)
    .then((res) =>
      handleThenSuccess(
        res,
        dispatch(
          handleSetUser({ ...res.data.data.user, token: res.data.data.token })
        )
      )
    )
    .catch(handleCatchError)

/**
 * @name handleUserLogin
 * @description  function handles user logins
 * @param {Object} data
 * @return {Promise<{result: AxiosResponse<Object>}>} user object from backend
 */
export const handleUserLogin = (data) => (dispatch) =>
  HTTP.baseApi()
    .post('/auth/user/login', data)
    .then((res) =>
      handleThenSuccess(
        res,
        dispatch(
          handleSetUser({ ...res.data.data.user, token: res.data.data.token })
        )
      )
    )
    .catch(handleCatchError)

/**
 * @name handleFetchUserDetails
 * @description  function gets User details
 * @param {Null}
 * @return {Promise<{result: AxiosResponse<Object>}>} user object from backend
 */
export const handleFetchUserDetails = () => (dispatch) => {
  const Id = sessionStorage.getItem('_id')
  return HTTP.baseApi()
    .get(`/auth/me/${Id}`)
    .then((res) =>
      handleThenSuccess(
        res,
        dispatch(
          handleSetUser({ ...res.data.data.user, token: res.data.data.token })
        )
      )
    )
    .catch(handleCatchError)
}
/**
 * @name handleUserLogout
 * @description  function logs out a user
 * @param {Null}
 * @return {Promise<{result: AxiosResponse<Object>}>} user object from backend
 */
export const handleUserLogout = () => (dispatch) =>
  HTTP.baseApi()
    .delete('/logout')
    .then((res) =>
      handleThenSuccess(
        res,
        dispatch(handleSetUser({ _id: null, token: null }))
      )
    )
    .catch(handleCatchError)
