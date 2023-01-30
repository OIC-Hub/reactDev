import Product from '../components/Product';
import { useEffect, useState } from 'react';
import axios from 'axios';
function HomePage() {
  const [products, setProducts] =useState([]);
  const [search, setSearch] = useState(''); 
  async function getProduct(){
    try{
      let product;
      if(!search.trim()){
        product = await axios('https://dummyjson.com/products?limit=12');
  }else{
    product = await axios(`https://dummyjson.com/products/search?q=${search}`);
  }
    if(product.status === 200){
      setProducts(product.data.products)
    }
    }catch(err){
      console.log(err)
    }
  } 
 
  
    const addProduct=()=>{
      if(localStorage.key('product') && products.length > 0){
      let prod = JSON.parse(localStorage.getItem('product'));
         console.log(prod )
      setProducts(products.push(prod))
    }
    return 
  
    // products.push(JSON.parse(localStorage.getItem('product')))
  }
   useEffect(()=>{
    addProduct()
    console.log(products)
   }, [])
    useEffect(()=>{
        getProduct();
        
    }, [products])

       return(
          <>
              <p>
                <input type='search' name="search" placeholder="Search by product name" onChange={(e)=> setSearch(e.target.value)} />
              </p>
            <div className="main">
             
              {products.length > 0 ? products.map((value, index)=>{
                const {name, img, price, description} = value;
               return(
                  <Product key={index}  {...value} />
               )
              }) :"Loading..."}
    
       </div>
       </>
            )
}

export default HomePage