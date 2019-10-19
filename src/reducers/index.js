import { combineReducers } from 'redux'
import ExpenseListReducer from './ExpenseListReducer'

const rootReducer = combineReducers ({ expenseList: ExpenseListReducer })
export default rootReducer;