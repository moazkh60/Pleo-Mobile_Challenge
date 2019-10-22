import {
  UPDATE_COMMENT_FAILURE,
  UPDATE_COMMENT_SUCCESS,
  RECEIPT_ADD_SUCCESS,
  RECEIPT_ADD_FAILURE,
  CLEAR_UPDATED_EXPENSE,
} from '../common/Types';

// Set expense list to empty and isLoading to false
const initialState = {
  expense: {},
  message: '',
};

/**
 * This reducer returns new state of
 * expense list and adds it to the store
 * @param {object} state manages the data to be put in store
 * @param {object} action provides the data fetched from api in payload
 */
export default function ExpenseUpdateReducer(
  state = initialState,
  action = {},
) {
  switch (action.type) {
    case RECEIPT_ADD_SUCCESS:
    case UPDATE_COMMENT_SUCCESS:
      return {
        ...state,
        expense: action.payload,
      };
    case RECEIPT_ADD_FAILURE:
    case UPDATE_COMMENT_FAILURE:
      return {...state, message: 'Failed to Update'};
    case CLEAR_UPDATED_EXPENSE:
      return initialState;
    default:
      return state;
  }
}
