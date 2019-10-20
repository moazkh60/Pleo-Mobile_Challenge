import {
  FETCH_EXPENSE_SUCCESS,
  FETCH_EXPENSE_FAILURE,
  SORT_EXPENSES,
} from '../common/Types';

// Set expense list to empty and isLoading to false
const initialState = {
  expenses: [],
  isLoading: true,
  total: 0,
};

/**
 * This reducer returns new state of
 * expense list and adds it to the store
 * @param {object} state manages the data to be put in store
 * @param {object} action provides the data fetched from api in payload
 */
export default function ExpenseListReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_EXPENSE_SUCCESS:
      return {
        ...state,
        expenses: [...state.expenses, ...action.payload.expenses],
        total: action.payload.total,
        isLoading: false,
      };
    case FETCH_EXPENSE_FAILURE:
      return {...state, isLoading: false};
    case SORT_EXPENSES:
      return {
        ...state,
        expenses: state.expenses.sort((exp1, exp2) => {
          return exp1.user.first > exp2.user.first ? 1 : -1;
        }),
      };
    default:
      return state;
  }
}
