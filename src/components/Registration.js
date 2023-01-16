import React, { useState } from 'react'
function Registration() {
    const mainForm = {
       width: '40%',
       margin:'auto',
    }
    const formDiv ={
        marginTop: '2%'
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] =useState('');
    const [password, setPassword] = useState('');

  return (
    <div>
       <form style={mainForm }>
        <div style={formDiv}> 
        {name}
            <input type="text" onChange={(e)=>{setName (e.target.value)}}
             name='name' placeholder='Your Name' 
              style={{width: '100%', height:'40px', border:'none', borderBottom: '1px inset green'}}/>
          </div>
            <div style={formDiv}>
            <input type="email" name='email' placeholder='Your Email'  style={{width: '100%', height:'40px', border:'none', borderBottom: '1px inset green'}} />
        </div>
        <div style={formDiv}>
            <input type="tel" name='phone' placeholder='Your phone' style={{width: '100%', height:'40px', border:'none', borderBottom: '1px inset green'}} />
        </div>
        <div style={formDiv}>
            <input type="password" name='password' placeholder='Your Password' style={{width: '100%', height:'40px', border:'none', borderBottom: '1px inset green'}} />
        </div>
       </form>

    </div>
  )
}

export default Registration