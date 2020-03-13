import { combineReducers } from 'redux'
import markets from './marketReducer'
import reviews from './reviewReducer'

export default combineReducers({
    markets,
    reviews
})