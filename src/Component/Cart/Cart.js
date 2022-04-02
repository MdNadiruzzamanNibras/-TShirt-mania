import React from 'react';

const Cart = ({cart, handleRemoveFormCart}) => {
    return (
        <div>
            <h4>{cart.length}</h4>
            {
                cart.map(tShirt=> <p>{tShirt.name}
                <button onClick={()=>handleRemoveFormCart(tShirt)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;