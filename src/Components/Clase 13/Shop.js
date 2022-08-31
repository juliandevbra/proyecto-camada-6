import React, { useState } from 'react'
import myPoke from './myPoke.json'
import './Shop.css'

const Shop = () => {

  return (
    <div className='shop'>
        {myPoke.map(item => 
           <section  className='item-card'>
            <h3>{item.item}</h3>
            <img src={item.img} alt='' className='item-img'/>
           </section>
        )}
    </div>
  )
}

export default Shop