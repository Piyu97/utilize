import { STORE_DATA,NO_DATA,LOADING } from "./action_types"
import axios from "axios";

const loading = () => {
    return {
        type: LOADING,
    }
}

const storeData = (payload) => {
    console.log(payload)
    return {
        type:STORE_DATA,
        payload:payload
    }

}
 const noData = () => {
    return {
        type:NO_DATA,
    }
}

const getData=()=>{
    return async dispatch=>{
          dispatch(loading())
          return  await axios({
            method: 'get',
            url: "http://www.json-generator.com/api/json/get/clwRkuBmKW?indent=2",
        })
        .then(res=>dispatch(storeData(res)))
        .catch(err=>dispatch(noData()))          
    }
}
export {getData,loading,storeData,noData}