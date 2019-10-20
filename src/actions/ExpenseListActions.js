import {
  FETCH_EXPENSE_FAILURE,
  FETCH_EXPENSE_SUCCESS,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILURE,
  CLEAR_UPDATED_EXPENSE,
  SORT_EXPENSES,
} from '../common/Types';
import {EXPENSES_URL} from '../common/Constants';

/**
 * Limit and offset are sent to fetch list of
 * expenses based on number of items i.e limit
 * and starting offset
 * @param {number} limit
 * @param {number} offset
 */
export const fetchExpenseList = (limit, offset) => {
  return dispatch => {
    fetch(EXPENSES_URL + `?limit=${limit}&offset=${offset}`)
      .then(response => response.json())
      .then(data => dispatch({type: FETCH_EXPENSE_SUCCESS, payload: data}))
      .catch(error => {
        dispatch({type: FETCH_EXPENSE_FAILURE, payload: error});
      });
  };
};

/**
 * Sort Expenses action
 */
export const sortExpenses = () => {
  return {
    type: SORT_EXPENSES,
  };
};

/**
 * Update comment by passing id and comment
 * @param {string} id
 * @param {string} comment
 */
export const updateComment = (id, comment) => {
  return dispatch => {
    fetch(EXPENSES_URL + `/${id}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comment: comment,
      }),
    }).then(response => response.json())
      .then(data => dispatch({type: UPDATE_COMMENT_SUCCESS, payload: data}))
      .catch(error => {
        dispatch({type: UPDATE_COMMENT_FAILURE, payload: error});
    });
  };
};

/**
 * Clear updated comment reducer as the 
 * expense object is now already updated
 */
export const clearUpdatedExpense = () => {
    return{
      type: CLEAR_UPDATED_EXPENSE  
    }
}