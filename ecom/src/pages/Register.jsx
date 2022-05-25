import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { register } from '../features/userActions'
import './style/login.css'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [user,setUser] = useState({username:'',email:'',password:''});
    const handleOnChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const handleRegister =(e)=>{
        e.preventDefault()
         register(dispatch,{...user}) 
         navigate('/login')   
    }
    console.log(user)
  return (
   <div className="login-sec">
       <div className="img-bx">
        <img src="https://clippingchicken.com/wp-content/uploads/2020/12/AdobeStock_210991613-768x512.jpeg" alt="ss" className='log-img' />
       </div>
       <div className="content-bx">
        <div className="form-bx">
            <h2>Create Account</h2>
            <form>
                <div className="input-bx">
                    <span>Username</span>
                    <input type="text" name='username' value={user.username} onChange={handleOnChange}/>
                </div>
                <div className="input-bx">
                    <span>Email</span>
                    <input type="text" name='email'value={user.email} onChange={handleOnChange}/>
                </div>
                <div className="input-bx">
                    <span>Password</span>
                    <input type="password" name='password' value={user.password} onChange={handleOnChange}/>
                </div>
                <div className="input-bx">
                    <span>Confirm Password</span>
                    <input type="password" name='cpassword'  value={user.password} onChange={handleOnChange}/>
                </div>
                <div className="input-bx">
                    <button onClick={handleRegister}>Sign up</button>
                </div>
                <div className="input-bx">
                   <p>have an account ? <Link to='/login'>Sign in</Link></p>
                </div>
            </form>
        </div>
       </div>
   </div>
  )
}

export default Register