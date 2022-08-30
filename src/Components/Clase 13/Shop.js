import React, { useState } from 'react'
import Item from './Item'
import myPoke from './myPoke.json'
import './Shop.css'

const Shop = ({setTotal, total}) => {

  return (
    <div className='shop'>
        {myPoke.map(item => 
            <Item setTotal={setTotal} total={total} key={item.id} item={item.item} stock={item.stock} price={item.price} img={item.img}/>
        )}
    </div>
  )
}

export default Shop