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
    useEffect(()=>{
        getProduct();
    }, [products])
        return(
          <>
           {search}
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