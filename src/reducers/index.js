import { combineReducers } from 'redux'
import markets from './marketReducer'
import reviews from './marketReducer'

export default combineReducers({
    markets,
    reviews
})