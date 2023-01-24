import { useParams } from "react-router-dom"
import axios from 'axios';
import { Fragment, useEffect, useState } from "react";
function SingleProduct() { 
  const [data, setdata] = useState({});
 const {id}= useParams();
 const  getSingleProduct = async ()=>{
  try{
        let prod = await axios(`https://dummyjson.com/products/${id}`)
         setdata(prod.data)
      }catch(err){
    console.log(err)
  }
}
 useEffect(()=>{
  getSingleProduct()
  console.log(data)
  }, []);

  return (
    <Fragment>
        

    </Fragment>
  )
}

export default SingleProduct