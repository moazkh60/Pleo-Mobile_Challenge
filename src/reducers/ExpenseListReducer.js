
import { FETCH_EXPENSE_LIST, FETCH_EXPENSE_SUCCESS, FETCH_EXPENSE_FAILURE } 
from "../common/Types";

// Set expense list to empty and isLoading to false
const initialState = {
    expenses: [],
    isLoading: false
}

/**
 * This reducer returns new state of 
 * expense list and adds it to the store
 * @param {object} state manages the data to be put in store
 * @param {object} action provides the data fetched from api in payload
 */
export default function ExpenseListReducer(state = initialState, action = {}){
    switch(action.type) {
        case FETCH_EXPENSE_LIST:
          return { ...state, isLoading: true }
        case FETCH_EXPENSE_SUCCESS:
          return { ...state, expenses: action.payload, isLoading: false }
        case FETCH_EXPENSE_FAILURE:
          return { ...state, isLoading: false }
        default:
          return state;
    }
}