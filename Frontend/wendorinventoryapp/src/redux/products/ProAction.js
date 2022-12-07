import axios from "axios"
import { GETERROR, GETPRODUCT, LOADPRODUCT } from "./ProActionType"

const loadProduct = () =>{
    return {
        type:LOADPRODUCT
    }
}

export const getProduct = (payload) =>{
    return {
        type:GETPRODUCT,
        payload
    }
}

const getError =(payload)=>{
    return{
        type:GETERROR,
        payload
    }
}



export const fetchData = (payload) =>(dispatch)=>{
  dispatch(loadProduct())
  return axios(`https://reqres.in/api/users`)
  .then((r)=>dispatch(getProduct(r.data)))
  .catch(e=>dispatch(getError(e)))
}

export const deleteData = (id) =>(dispatch)=>{
    dispatch(loadProduct())
    return axios.delete(`https://reqres.in/api/users/${id}`)
    .then((r)=>dispatch(getProduct(r.data)))
    .catch(e=>dispatch(getError(e)))
  }
  