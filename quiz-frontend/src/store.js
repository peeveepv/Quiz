import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import questionReducer from './reducers/questionReducer'
import notificationReducer from './reducers/notificationReducer'
import pointsReducer from './reducers/pointsReducer'
import timeReducer from './reducers/timeReducer'

const reducer = combineReducers({
  questions: questionReducer,
  notification: notificationReducer,
  points: pointsReducer,
  time: timeReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store