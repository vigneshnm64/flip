import React from "react";
import { useCartContext } from "../../context/cart-context";

const OrderDetails = () => {
  const { cart } = useCartContext();
  const totalPrice = cart.reduce((totalPrice, currentItem) => {
    return (totalPrice += currentItem.qty * currentItem.price);
  }, 0);

  const totalDiscount = cart.reduce((totalDiscount, currentItem) => {
    return (totalDiscount += currentItem.qty * currentItem.discount);
  }, 0);

  const totalAmount = totalPrice - totalDiscount;
  return (
    <div>
      <h4>Order Details</h4>
      <div className="order-info">
        <h5>Price : ₹{(totalPrice * 70).toFixed(0)}</h5>
        <h5>Discount : ₹{(totalDiscount * 70).toFixed(0)}</h5>
        <h5>Delivery : Free</h5>
        <h5>Total Amount :₹{(totalAmount * 70).toFixed(0)}</h5>
      </div>
    </div>
  );
};

export default OrderDetails;
