import { combineReducers } from 'redux'
import User from './UserReducer'
import Loading from './LoadingReducer'

const rootReducers = combineReducers({
  User,
  Loading,
})

export default rootReducers
