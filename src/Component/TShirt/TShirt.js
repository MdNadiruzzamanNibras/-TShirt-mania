import React from 'react';
import './TShirt.css'
const TShirt = ({tShirt, handleAddToCart}) => {
  const {price, picture, name} = tShirt
    return (
        <div className='tShirt'>
            <div >
                <img src={picture} alt="" />
            </div>
            <h3>{name}</h3>
            <p>${price}</p>
            <button onClick={()=>handleAddToCart(tShirt)}>Add To Cart</button>
        </div>
    );
};

export default TShirt;