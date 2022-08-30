import React, { useState } from 'react'

const Item = ({item, stock, price, img, total, setTotal}) => {

    const [cantidad, setCantidad] = useState(stock)

    const buy = () => {
        setCantidad(cantidad - 1)
        console.log(total)
        console.log(price, stock)
        setTotal({
            precio: total.precio + price,
            stock: total.stock + 1
        })
    }

  return (
    <section  className='item-card'>
        <h3>{item}</h3>
        <img src={img} alt='' className='item-img'/>
        <h3>$ {price}</h3>
        <p>En stock: {cantidad}</p>
        <button 
            onClick={() => buy()} 
            className={cantidad > 0 ? 'item-button' : 'item-disabled'} 
            disabled={cantidad === 0 && true}
        >{cantidad > 0 ? 'BUY' : 'SIN STOCK'}</button>
    </section>
  )
}

export default Item