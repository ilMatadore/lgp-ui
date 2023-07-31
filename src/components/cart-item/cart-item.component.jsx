import React  from 'react';
import './cart-item.styles.css'


const CartItem = ({ cartItem, addItem, removeItem }) => {  
    const { id, title, quantity, price } = cartItem;

    return (
        <div key={id} className="rows-container">
            <div>{title}</div>
            <div style={{display: 'flex'}}>
                <div className="arrow-rows" onClick={() => {removeItem(cartItem)}}>&#10094;</div><span>{quantity}</span><div className="arrow-rows" onClick={() => {addItem(cartItem)}}>&#10095;</div> 
            </div>
            <div>$ {price}</div> 
        </div>
    )
}

export default CartItem;