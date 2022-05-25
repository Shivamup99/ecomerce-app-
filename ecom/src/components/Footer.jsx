import React from 'react'
import moment from 'moment'
import {Facebook, GitHub, Instagram, LinkedIn} from '@material-ui/icons'
import './style/footer.css'
const Footer = () => {
  return (
    <div className='footer'>
    Develop & Design Shivam © Copyright {moment().format("YYYY")}
    <div className="social">
    <LinkedIn style={{color:'rgb(66, 103, 178)' , marginRight:'13px',fontSize:'29px'}} />
    <GitHub style={{color:'rgb(0,0,0)', marginRight:'13px',fontSize:'29px'}}/>
      <Instagram style={{color:'#E4405F',marginRight:'13px',fontSize:'29px'}} />
      <Facebook style={{color:'#4267B2' , marginRight:'13px',fontSize:'29px'}} />
    </div>
  </div>
  )
}

export default Footer