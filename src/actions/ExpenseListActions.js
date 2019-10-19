import { FETCH_LIST } from '../common/Types'

export const fetchListAction = (data) => {
    return {
        type: FETCH_LIST,
        payload: {
            data
        }
    }
}