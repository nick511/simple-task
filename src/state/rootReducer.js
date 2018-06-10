
import { combineReducers } from 'redux'

import zipCodesReducer from './reducers/zipCodes'

const rootReducer = combineReducers({
  zipCodes: zipCodesReducer
})

export default rootReducer
