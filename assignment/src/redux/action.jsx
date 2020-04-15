import { STORE_DATA, NO_DATA, LOADING, DEL,UPDATE ,ADD,FILTERING,SORTING} from "./action_types"
import axios from "axios";

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
        type:ADD,
        payload
    }
}
const filtering = (payload) => {
    return {
        type:FILTERING,
        payload
    }
}
const sorting = (payload) => {
    return {
        type:SORTING,
        payload
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


export { getData, loading, storeData, noData, del,update,add, filtering,sorting }