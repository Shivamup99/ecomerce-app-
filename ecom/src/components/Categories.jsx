import React from 'react'
import './style/cats.css'
import {Link} from 'react-router-dom'
const data =[
    {
        image:'https://freerangestock.com/sample/109713/gentleman-in-suit.jpg',
        info :'Men Suit fashion style',
        category:'men'
    },
    {
        image:'https://my-brandable.com/img/cms/Styles/Grunge%20style%20clothing.jpg',
        info:'Girl style clothing',
        category:'girl'
    },
    {
        image:'https://my-brandable.com/img/cms/Styles/Chic%20fashion%20style.jpg',
        info:'Chic fashion style',
        category:'jeans'
    },
]

const Categories = () => {
  return (
    <div className='cats'>
        {data.map((item)=>(
          <Link to={`/product/${item.category}`}>
            <div className="cats-item" key={item.info}>
            <img src={item.image} alt={item.info} className='cats-img'/>
            <div className="cats-info">
            <span>{item.info}</span>
            <button>Shop Now</button>
            </div>
          </div>
          </Link>
        ))}

    </div>
  )
}

export default Categories