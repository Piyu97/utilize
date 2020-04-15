import axios from "axios";
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


const loading = () => {
    return {
        type: LOADING,
    }
}

const storeData = (payload) => {
    console.log(payload)
    return {
        type: STORE_DATA,
        payload: payload
    }

}
const noData = () => {
    return {
        type: NO_DATA,
    }
}

const getData = () => {
    return async dispatch => {
        dispatch(loading())
        return await axios({
            method: 'get',
            url: "http://www.json-generator.com/api/json/get/clwRkuBmKW?indent=2",
        })
            .then(res => dispatch(storeData(res)))
            .catch(err => dispatch(noData()))
    }
}

const del = (idx) => {
    return {
        type: DEL,
        payload: idx
    }
}
const update = (payload) => {
    return {
        type: UPDATE,
        payload
    }
}
const add = (payload) => {
    return {
        type: ADD,
        payload
    }
}
const filtering = (payload) => {
    return {
        type: FILTERING,
        payload
    }
}
const sorting = (payload) => {
    return {
        type: SORTING,
        payload
    }
}
const changePage = (payload) => {
    return {
        type: CHANGE_ACTIVE_PAGE,
        payload
    }
}
const changePerPage = (payload) => {
    return {
        type: CHANGE_PER_PAGE,
        payload
    }
}
const changeDelValue = () => {
    return {
        type: CHANGE_DEL_VALUE,
    }
}


export { getData, loading, storeData, noData, del, update, add, filtering, sorting, changePerPage, changePage,changeDelValue }