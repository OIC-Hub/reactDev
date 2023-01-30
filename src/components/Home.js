import Button from './Button';
import { Link } from 'react-router-dom';
import './products.css';
function Home(props) {
   console.log(props)

  const {id, title, description,price, discountPercentage, rating, stock, brand, category, thumbnail, images } = props;

  const style ={
    borderBottom:'1px outset grey',
     backgroundColor:'white'
     }
  return (
    <>
    {JSON.stringify(props)}
    <div className='product' style={style}>
      <h3 className='center'> {title}</h3>
        <img src={images[0]} alt={title} />
        <p>{description}</p>
 <p style={{marginTop:'2%'}}> Price: {price}   <span style={{marginLeft:'2%'}}>Discount: {discountPercentage}</span></p>
   <Link to={`/product/${id}`} className="btn btn-warning">Details</Link>
    <Button  />
    </div>
    </>
  )
}
export default Home