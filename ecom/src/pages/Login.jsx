import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style/login.css'
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../features/userActions'
// import {Facebook, GitHub, Instagram, LinkedIn} from '@material-ui/icons'
const Login = () => {
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {isFetching,error} = useSelector(state=>state.user)
    const dispatch = useDispatch()
    const handleLogin = (e)=>{
        e.preventDefault()
        login(dispatch,{email,password})
        window.location.href="/"
    }
     
  return (
   <div className="login-sec">
       <div className="img-bx">
        <img src="https://static.remove.bg/remove-bg-web/a72f919da581145bc8a52ac0c5d21f5c4741f367/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg" alt="ss" className='log-img' />
       </div>
       <div className="content-bx">
        <div className="form-bx">
            <h2>Login</h2>
            <form>
                <div className="input-bx">
                    <span>Email</span>
                    <input type="text" name='email' onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="input-bx">
                    <span>Password</span>
                    <input type="password" name='password' onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="input-bx">
                    <button  onClick={handleLogin}>Sign in</button>
                </div>
                <div className="input-bx">
                   <p>have an account ? <Link to='/register'>Sign up</Link></p>
                </div>
            </form>
        </div>

       </div>
       {/* <div className="socials">
    <LinkedIn style={{color:'rgb(66, 103, 178)' , marginRight:'13px',fontSize:'29px'}} />
    <GitHub style={{color:'rgb(0,0,0)', marginRight:'13px',fontSize:'29px'}}/>
      <Instagram style={{color:'#E4405F',marginRight:'13px',fontSize:'29px'}} />
      <Facebook style={{color:'#4267B2' , marginRight:'13px',fontSize:'29px'}} />
    </div> */}
   </div>
  )
}

export default Login