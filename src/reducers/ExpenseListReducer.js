
import FETCH_LIST from '../common/Types'

const initialState = {
    text: '',
}

export default function ExpenseListReducer(state = initialState, action = {}){
    switch(action.type) {
        case FETCH_LIST:
          return { ...state, text: action.payload.data }
        default:
          return state;
    }
}