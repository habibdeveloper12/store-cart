import React from 'react';

const Cart = (prop) => {
  const { cart } = prop;
  // console.log(cart);s
  let total = 0;
  let shipping = 0
  for (const buy of cart) {
    total = total + buy.price
    shipping = buy.shipping
  }


  const tax = total * 10 / 100;
  const grandTotal = parseFloat(total + shipping + tax)
  return (
    <div>
      <h1>Order Summery</h1>
      <h3>Selected Items:{cart.length}</h3>
      <h3>Total: {total}</h3>
      <h3>Shpping cost:{shipping}</h3>
      <h3>Tax:{tax}</h3>
      {/* for to toFixed need to be parseFloat or parseInt */}
      <h3>Grand Total:{grandTotal.toFixed(1)}</h3>
    </div>
  );
};

export default Cart;