import { DELETEPRODUCT, GETERROR, GETPRODUCT, LOADPRODUCT } from "./ProActionType";

const init = {
  loading : false,
  error : false,
  product : []
}

export const proReducer = (store=init,{type,payload}) =>{
  // console.log(payload);
  switch (type) {
    case LOADPRODUCT :
     return{
      ...store,
      loading:true,
      error:false
     }
     case GETPRODUCT :
      return{
       ...store,
       loading:false,
       error:false,
       product:payload
      }
      case GETERROR :
        return{
         ...store,
         loading:false,
         error:true
        }  
        case DELETEPRODUCT:
          let delTask = store.userTask.filter((e)=>e.id !== payload);
          return {
            ...store,
            product:delTask
          }
    default:
     return store;
  }
}