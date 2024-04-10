import React from 'react'
import './Offers.css'

import offerImg from '../../assets/images/bg2.png'
const Offers = () => {
  return (
    <>
        <div className='offers-container' style={{backgroundImage:`url(${offerImg})`}}>
            <div className='offers-left'>
                <h1 className='offer-title'>Built Your Own Smart Habitation Now, and Get 20% Off</h1>
                <p className='offer-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum molestiae suscipit nemo! Eius doloribus ut officiis nostrum provident eligendi, similique quidem hic fuga dolorum aut quo velit unde maxime iure?</p>
                <button className='offer-btn'>Discover Me</button>
            </div>
        </div>
      
    </>
  )
}

export default Offers
