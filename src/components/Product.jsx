import Button from './Button';
import './products.css';
function Product({productName, imageSrc, price, description}) {
  const style ={
    borderBottom:'1px outset grey',
     backgroundColor:'white'
     }
// const {productName, imageSrc, price, description} = props
  return (
    <div className='product' style={style}>
        <img src={imageSrc} alt={productName} />
        <p>{description}</p>
 <p>{price}</p>
    <Button />
    </div>
  )
}
export default Product