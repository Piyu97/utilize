import { STORE_DATA, NO_DATA, LOADING, DEL, UPDATE, ADD, FILTERING, SORTING } from "./action_types"

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
        case ADD:
            return {
                ...state,
                loading: false,
                database: [...state.database, action.payload],
                secondaryData: [...state.secondaryData, action.payload]
            }
        case FILTERING:
            if (action.payload != "default") {
                return {
                    ...state,
                    loading: false,
                    secondaryData: state.database.filter((item) => item.product == action.payload)
                }
            }
            return {
                ...state,
                loading: false,
                secondaryData: state.database
            }
        case SORTING:
            if (action.payload == "default") {
                return {
                    ...state,
                    loading: false,
                    secondaryData: state.database
                }
            }
            else if(action.payload=="asc"){
                return {
                    ...state,
                    loading: false,
                    secondaryData: state.secondaryData.sort((a,b)=>(a.customer_name>b.customer_name)?1:-1)
                }
            }
            else{
                return {
                    ...state,
                    loading: false,
                    secondaryData: state.secondaryData.sort((a,b)=>(b.customer_name>a.customer_name)?1:-1)
                }
            }
        case DEL:
            return {
                ...state,
                loading: false,
                database: state.database.filter((item) => (item.id).toString() != (action.payload.toString())),
                secondaryData: state.secondaryData.filter((item) => (item.id).toString() != (action.payload.toString()))

            }
        case UPDATE:
            return {
                ...state,
                loading: false,
                database: state.database.map((item) => (item.id).toString() == (action.payload.id.toString()) ? action.payload : item),
                secondaryData: state.secondaryData.map((item) => (item.id).toString() == (action.payload.id.toString()) ? action.payload : item)

            }
        default:
            return state
    }
}
export default reducer