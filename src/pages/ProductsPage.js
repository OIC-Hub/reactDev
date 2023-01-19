import Product from '../components/Product';
import { useEffect, useState } from 'react';
import axios from 'axios';
function ProductsPage() {
    const [products, setProducts] =useState([]);

    async function getProduct(){
      try{
      let product = await axios('https://dummyjson.com/products');
      if(product.status === 200){
        setProducts(product.data.products)
      }
      }catch(err){
        console.log(err)
      }
    } 
      useEffect(()=>{
       getProduct();
      }, [])
          return(
              <div className="main">
              {/* Greeting {product} */}
                {products.length > 0 ? products.map((value, index)=>{
                  const {name, img, price, description} = value;
                 return(
                    <Product key={index}  {...value} />
                 )
                }) :"Loading..."}
      
                 // Without looping
                {/* <Product productName={products[0].name} imageSrc={products[0].img} price={products[0].price} description={products[0].description} />
                <Product productName={products[1].name} imageSrc={products[1].img} price={products[1].price} description={products[1].description}  />
                <Product productName={products[2].name} imageSrc={products[2].img} price={products[2].price} description={products[2].description}  />
                <Product productName={products[3].name} imageSrc={products[3].img} price={products[3].price} description={products[3].description}  /> */}
                </div>
              )
}

export default ProductsPage