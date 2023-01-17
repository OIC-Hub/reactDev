import React, { useState } from 'react'
function Registration() {
    const mainForm = {
       width: '40%',
       margin:'auto',
    }
    const formDiv ={
        marginTop: '2%'
    }

    const [user, setuser] = useState({
      name: '',
      email : '',
      phone: '',
      password : '',
    });
    const [errors, setErrors] = useState({
      nameErr: '',
      emailErr: '',
      phoneErr: '',
      password: ''
    })
    const handleForm = (e)=>{
       let name= e.target.name;
       let value = e.target.value;
       setuser({
        ...user,
        [name]: value,
       })
    }
    const submitData = (e)=>{
      e.preventDefault()

      if(user.name == "" || user.name == 0 ||user.name == null){
        setErrors((err)=>{
        return  {
            ...err,
            nameErr: `Name is required`,
          }
        })
      }
      if(user.email == "" || user.email == 0 ||user.email == null){
        setErrors((err)=>{
        return  {
            ...err,
            emailErr: `Email is required`,
          }
        })
      }
      if(user.phone == "" || user.phone == 0 ||user.phone == null){
        setErrors((err)=>{
        return  {
            ...err,
            phoneErr: `Phone is required`,
          }
        })
      }
      if(user.password == "" || user.password == 0 ||user.password == null){
        setErrors((err)=>{
        return  {
            ...err,
            passwordErr: `Password is required`,
          }
        })
      }

      console.log(user)
    }
  return (
    <div>
       <form onSubmit={submitData} style={mainForm }>
        <div style={formDiv}> 
        {user.name}
            <input type="text" onChange={handleForm}
             name='name' placeholder='Your Name' 
              style={{width: '100%', height:'40px', border:'none', borderBottom: '1px inset green'}}/>
            <strong>{errors.nameErr}</strong>
          </div>
            <div style={formDiv}>
            {user.email}
            <input type="email" name='email'
            onChange={handleForm}
             placeholder='Your Email' 
              style={{width: '100%', height:'40px', border:'none', borderBottom: '1px inset green'}} />
        </div>
        <div style={formDiv}>
        {user.phone}
            <input type="tel"
             name='phone' onChange={handleForm}
              placeholder='Your phone'
               style={{width: '100%',
                height:'40px', border:'none',
                 borderBottom: '1px inset green'}} />
        </div>
        <div style={formDiv}>
        {user.password}
            <input type="password"
             name='password'
             onChange={handleForm}
              placeholder='Your Password'
               style={{width: '100%', height:'40px', border:'none', borderBottom: '1px inset green'}} />
        </div>
        <button type='submit'>Register</button>
       </form>

    </div>
  )
}

export default Registration