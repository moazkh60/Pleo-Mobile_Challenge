
import FETCH_LIST from '../common/Types'

const initialState = {
    text: '',
}

const ExpenseListReducer = (state = initialState, action = {}) => {
    switch(action.type) {
        
        case FETCH_LIST:
        return { ...state, text: action.payload.data }

        default:
        return state;
    }

}

export default ExpenseListReducer