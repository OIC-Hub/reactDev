import Product from '../components/Product';
import { useEffect, useState } from 'react';
function ProductsPage() {
    const [products, setProducts] =useState([
        {
          img: 'https://m.media-amazon.com/images/I/71+CaUj9EtL._AC_UL320_.jpg',
          description: `Nizoral Anti-Dandruff Shampoo with 1% 
          Ketoconazole, Fresh Scent, 7 Fl Oz
          7 Ounce (Pack of 1)`,
          price: 3345.00,
          name: 'Book'
      
        },
        {
          img: 'https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL320_.jpg',
          description: `Seagate Portable 2TB External Hard Drive HDD — USB 3.0 for PC, Mac, PlayStation, & Xbox -1-Year Rescue Service`,
          price: 233792,
          name: 'Seagate Portable 2TB External Hard Drive HDD'
      
        },
        {
          img: 'https://m.media-amazon.com/images/I/61QGMX0Qy6L._AC_SL1352_.jpg',
          description: `Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-`,
          price: 25185,
          name: 'Sceptre 24" Professional'
      
        },
        {
          img: 'https://m.media-amazon.com/images/I/61QGMX0Qy6L._AC_SL1352_.jpg',
          description: `Lenovo 2022 Newest Ideapad 3 Laptop, 15.6" HD Touchscreen, 11th Gen Intel Core i3-1115G4 Processor,`,
          price: 1574,
          name: 'laptop'
      
        },
      ])
      useEffect(()=>{
        // setProduct('Hello Java')
       
      })
          return(
              <div className="main">
              {/* Greeting {product} */}
                {products.length > 0 ? products.map((value, index)=>{
                  const {name, img, price, description} = value;
                 return(
                    <Product key={index} productName={name} imageSrc={img}   price={price} description={description} />
                 )
                }) :"No Product available"}
      
                 // Without looping
                {/* <Product productName={products[0].name} imageSrc={products[0].img} price={products[0].price} description={products[0].description} />
                <Product productName={products[1].name} imageSrc={products[1].img} price={products[1].price} description={products[1].description}  />
                <Product productName={products[2].name} imageSrc={products[2].img} price={products[2].price} description={products[2].description}  />
                <Product productName={products[3].name} imageSrc={products[3].img} price={products[3].price} description={products[3].description}  /> */}
                </div>
              )
}

export default ProductsPage