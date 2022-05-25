import React from 'react'
import './style/news.css'
import {Send} from '@material-ui/icons'
const Newsletter = () => {
  return (
    <div className='news'>
    <h2 className="title">Newsletter</h2>
    <p className='desc'>Get timely update from your favorit products</p>
    <div className="action-news">
      <input placeholder='Your email ' type='text'/>
      <button type='button'>
          <Send/>
      </button>
    </div>
    </div>
  )
}

export default Newsletter