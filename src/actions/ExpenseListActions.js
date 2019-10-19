import { FETCH_LIST } from '../common/Types'

export const fetchList = (data) => {
    return {
        types: FETCH_LIST,
        payload: {
            data
        }
    }
}