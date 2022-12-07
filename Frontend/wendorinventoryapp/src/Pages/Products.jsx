import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductModal } from '../components/ProductModal';
import { deleteData, fetchData } from '../redux/products/ProAction';
import "./Products.css"
const Products = () => {
  let allProduct = useSelector(store=>store.products.product);
  let dispatch = useDispatch();
//   console.log(allProduct);


function handleDelete(id){
  dispatch(deleteData(id))
 
}
  useEffect(()=>{
  dispatch(fetchData())
  },[dispatch])
    return (
    <div className='container' >
         {
         allProduct.data &&  allProduct.data.map((e)=>(
          <div className='artical' key={e.id} >
          <img className='img' src={e.avatar} />
          <p>{e.first_name}</p>
          <p>{e.last_name}</p>
           <p><i>{e.email}</i></p>
           <div className='icon' > 
             <div><ProductModal/> </div>
             <div onClick={()=>handleDelete(e.id)} >❌</div>
             </div>
          </div>
        ))
      }
    </div>
  )
}

export default Products