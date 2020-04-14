import { STORE_DATA, NO_DATA, LOADING ,DEL} from "./action_types"

const initialState = {
    database: [],
    loading: false,
    secondaryData: []
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
                database: action.payload.data,
                secondaryData: action.payload.data
            }
        case NO_DATA:
            return {
                ...state,
                loading: false,
            }
            case DEL:
                return {
                    ...state,
                    loading: false,
                    database:state.database.filter((item)=>(item.id).toString()!=(action.payload.toString())),
                    secondaryData:state.secondaryData.filter((item)=>(item.id).toString()!=(action.payload.toString()))

                }
        default:
            return state
    }
}
export default reducer