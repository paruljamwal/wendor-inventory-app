import axios from "axios"
import { GETERROR, GETPRODUCT, LOADPRODUCT } from "./newsActionType"

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
  return axios(`https://newsapi.org/v2/everything?q=tesla&from=2022-11-06&sortBy=publishedAt&_page=2&_limit=4&apiKey=620fa243679f4939bfd1ae9e23dc9701`)
  .then((r)=>dispatch(getProduct(r.data.articles)))
  .catch(e=>dispatch(getError(e)))
}
