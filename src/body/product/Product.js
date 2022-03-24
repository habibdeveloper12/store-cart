import React from 'react';
import './product.css'

const Product = (props) => {
  const { id, name, price, img } = props.mal


  return (
    <div>
      <div >
        <img src={img} alt={name} />
        <h4>{name}</h4>
        <h6>${price}</h6>
        <button onClick={() => props.handmenup(props.mal)}>Add cart</button>
      </div>
    </div>
  );
};

export default Product;