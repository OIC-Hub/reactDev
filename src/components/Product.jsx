import Button from './Button';
import './products.css';
function Product(props) {
console.log(props)


  return (
    <div className='product'>
        <img src={props.imageSrc} alt={props.productName} />
        <p>{props.description}</p>
 <p>{props.price}</p>
    <Button />
    </div>
  )
}
export default Product