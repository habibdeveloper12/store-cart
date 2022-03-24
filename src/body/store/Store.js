import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './store.css'


const Store = () => {
  const [product, setProduct] = useState([])
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [])
  const handmenup = (prop) => {
    console.log(prop);
    const newCart = [...cart, prop]
    setCart(newCart)

  }
  return (
    <div className='main' >


      <div className='store'>
        {
          product.map(prod => <Product
            mal={prod}
            handmenup={handmenup}

          ></Product>)
        }
      </div>
      <div className='card-item'>
        <Cart cart={cart}></Cart>

      </div>
    </div>
  );
};

export default Store;