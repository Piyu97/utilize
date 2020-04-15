import {
    STORE_DATA,
    NO_DATA,
    LOADING,
    DEL,
    UPDATE,
    ADD,
    FILTERING,
    SORTING,
    CHANGE_PER_PAGE,
    CHANGE_ACTIVE_PAGE,
    CHANGE_DEL_VALUE
} from "./action_types"

const initialState = {
    database: JSON.parse(sessionStorage.getItem("database")),
    loading: false,
    secondaryData: JSON.parse(sessionStorage.getItem("database")),
    activePage: 1,
    totalPages: 1,
    perPage: 10,
    delValue: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case STORE_DATA:
            sessionStorage.setItem("database", JSON.stringify(action.payload.data))
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
            else if (action.payload == "asc") {
                return {
                    ...state,
                    loading: false,
                    secondaryData: state.secondaryData.sort((a, b) => (a.customer_name > b.customer_name) ? 1 : -1)
                }
            }
            else {
                return {
                    ...state,
                    loading: false,
                    secondaryData: state.secondaryData.sort((a, b) => (b.customer_name > a.customer_name) ? 1 : -1)
                }
            }
        case DEL:
            return {
                ...state,
                loading: false,
                delValue: 1,
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
        case CHANGE_PER_PAGE:
            return {
                ...state,
                loading: false,
                totalPages: Math.floor(state.database.length / action.payload),
                perPage: Number(action.payload)
            }
        case CHANGE_ACTIVE_PAGE:
            return {
                ...state,
                loading: false,
                activePage: Number(action.payload)
            }
        case CHANGE_DEL_VALUE:
            return {
                ...state,
                loading: false,
                delValue: 0
            }
        default:
            return state
    }
}
export default reducer