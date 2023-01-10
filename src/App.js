import React from "react";
import './App.css'
function App(){
    return(
        <section className="main">
         <Img />
         <Description></Description>
         <button type="submit" className="btn">Order</button>
        </section>
        )
}
const Img = ()=>{
  return(
     <div>
    <img src="https://m.media-amazon.com/images/I/71+CaUj9EtL._AC_UL320_.jpg" alt="" />
    </div>
   
    ) 
}
const Description = ()=>{
    return (
        <div>
        <p>Nizoral Anti-Dandruff Shampoo with 1% Ketoconazole, Fresh Scent, 7 Fl Oz
 7 Ounce (Pack of 1)</p>
         </div>
    )
}

export default App;