import Button from './Button';
import './products.css';
function Product({productName, imageSrc, price, description}) {
// const {productName, imageSrc, price, description} = props
  return (
    <div className='product'>
        <img src={imageSrc} alt={productName} />
        <p>{description}</p>
 <p>{price}</p>
    <Button />
    </div>
  )
}
export default Product