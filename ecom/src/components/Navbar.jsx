import React , { useState } from 'react'
import {Search, ShoppingCartOutlined} from '@material-ui/icons';
import './style/Nav.css'
import { Avatar, Badge,Menu,MenuItem } from '@material-ui/core';
import {useSelector} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);
  const user = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token;
  // console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.username)
  const logout =()=>{
    localStorage.removeItem('persist:root')
     navigate('/login')
  }
  const handleAvatar =(e)=>{
    setAnchorEl(e.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isScrolled,setIsScrolled] = useState(false)
  window.onscroll=()=>{
    setIsScrolled(window.pageYOffset===0 ? false :true)
    return ()=>(window.onscroll=null)
  }
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <div className={isScrolled ? 'nav scrolled':'nav'}>
     <div className="left">
       <span>EN</span>
       <div className={isScrolled ?'scroll-search' : "search"}>
        <input placeholder='search products' type='text'/>
        <Search className='search-icon'/>
       </div>
     </div>
     <div className="center">
       <Link to='/' style={{textDecoration:'none', color:'inherit'}}>
       Hayroo Shop
       </Link>
     </div>
     <div className="right">
       {!user ?  
       <>
        <span><Link to='/register' style={{textDecoration:'none' , color:'inherit'}}>Register</Link></span>
        
        <span>  <Link to='/login' style={{textDecoration:'none' , color:'inherit'}}>Login</Link></span>
       </>
       :
       <>
       <Avatar className='avtar' aria-controls="simple-menu" aria-haspopup="true" onClick={handleAvatar}>
       <span>{JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.username[0]}</span>
       <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
       </Avatar>
       </>
        }
         <Link to='/cart'>
         <Badge badgeContent={quantity} color='primary'>
             <ShoppingCartOutlined style={{color:'gray'}}/>
         </Badge>
         </Link>
     </div>
    </div>
  )
}

export default Navbar