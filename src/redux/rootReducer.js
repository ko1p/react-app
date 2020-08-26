import {combineReducers} from 'redux'

import counter1 from './reducers/Counter1'
import counter2 from './reducers/Counter2'

export default combineReducers({
  counter1, counter2
})