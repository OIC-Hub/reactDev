import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";


function AddProduct() {

   const navigate= useNavigate()
    const [product, setProduct] = useState({
        title: '',
        price: '',
        image: ''
    })
    const handleInput = (e)=>{
      let value = e.target.value;
      let name = e.target.name;
      setProduct({
        ...product,
        [name]: value
    })
    }

    function submitData(e){
    e.preventDefault()
    axios.post('https://dummyjson.com/products/add',{
        title: product.title,
        price: product.price,
        images: product.image
    })
    .then(res => {
        localStorage.setItem('product', JSON.stringify(res.data))
        localStorage.getItem('name')
      navigate('/')
    })
    .catch(err => {
        console.error(err); 
    })
    }
  return (
    <div style={{width:'40%', margin: 'auto'}}>
        <div>Add Product</div>
        <form onSubmit={submitData}>
       <p>
        <label>Title</label> <br />
        <input type="text" name="title" onChange={handleInput} />
       </p>
       <p>
        <label>Price</label> <br />
        <input type="number" name="price"  step="0.01" onChange={handleInput}/>
       </p>
       <p>
       <label>Image</label> <br />
        <input type="url" name="image"  onChange={handleInput}/>
       </p>
       <button type="submit"> Add Product</button>
        </form>
    </div>
  )
}

export default AddProduct