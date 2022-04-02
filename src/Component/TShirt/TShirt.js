import React from 'react';
import './TShirt.css'
const TShirt = ({tShirt}) => {
  const {price, picture, name} = tShirt
    return (
        <div className='tShirt'>
            <div >
                <img src={picture} alt="" />
            </div>
            <h3>{name}</h3>
            <p>${price}</p>
            <button>Add To Cart</button>
        </div>
    );
};

export default TShirt;