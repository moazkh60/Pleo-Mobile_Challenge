import { FETCH_LIST, FETCH_EXPENSE_LIST, FETCH_EXPENSE_FAILURE, FETCH_EXPENSE_SUCCESS } from '../common/Types'
import { LIST_EXPENSES_URL } from '../common/Constants';

export const fetchExpenseList = (limit, offset) => {
    return (dispatch, getState) => {
        dispatch({ type: FETCH_EXPENSE_LIST})
        fetch(LIST_EXPENSES_URL+`?limit=${limit}&offset=${offset}`)
        .then(response => response.json())
        .then(data => dispatch({type: FETCH_EXPENSE_SUCCESS, payload: data.expenses}))
        .catch(error => {
            dispatch({ type: FETCH_EXPENSE_FAILURE, payload: error})
        })
    }
}

export const fetchListAction = (data) => {
    return {
        type: FETCH_LIST,
        payload: {
            data
        }
    }
}