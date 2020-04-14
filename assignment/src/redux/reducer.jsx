import { STORE_DATA, NO_DATA, LOADING } from "./action_types"

const initialState = {
    database: [],
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case STORE_DATA:
            return {
                ...state,
                loading: false,
                database: action.payload.data
            }
        case NO_DATA:
            return {
                ...state,
                loading: false,
                database:[]
            }
        default:
            return state
    }
}
export default reducer