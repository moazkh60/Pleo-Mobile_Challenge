import {combineReducers} from 'redux';
import ExpenseListReducer from './ExpenseListReducer';
import ExpenseUpdateReducer from './ExpenseUpdateReducer';

const rootReducer = combineReducers({
  expenseList: ExpenseListReducer,
  updatedExpense: ExpenseUpdateReducer,
});
export default rootReducer;
