import './App.css'
import Product from './components/Product';
function App(){
    let img1 = 'https://m.media-amazon.com/images/I/71+CaUj9EtL._AC_UL320_.jpg';
let description1 = `Nizoral Anti-Dandruff Shampoo with 1% 
Ketoconazole, Fresh Scent, 7 Fl Oz
7 Ounce (Pack of 1)`;
let price1 = '$ 3,345.00';
let productName1 = "Book"

    return(
        <div className="main">
          <Product productName1={productName1} imageSrc={img1} price={price1} description={description1} />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          </div>
        )
}
export default App;