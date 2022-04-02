import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import useTshirt from '../Hooks/useTshirt';
import TShirt from '../TShirt/TShirt';
import './Home.css'
const Home = () => {
    const [tShirts, settShirts] = useTshirt()
    const [cart, setCart] =useState([])
    const handleAddToCart = selectedItem=>{
        const exits = cart.find(tShirt=> tShirt._id===selectedItem._id)
        if(!exits){
            const newCart =[...cart, selectedItem]
            setCart(newCart)
        }
        else{
            alert('you already added')
        }
    }

    const handleRemoveFormCart= selectedItem=>{
        const rest = cart.filter(tShirt=>tShirt._id !== selectedItem._id)
        setCart(rest)
    }
    return (
        <div className='home-container'>
            <div className="tShirt-container">
             {
                 tShirts.map(tShirt=> <TShirt key={tShirt._id}
                    tShirt={tShirt}
                    handleAddToCart={handleAddToCart}
                 ></TShirt>)
             }
            </div>
            <div className="cart-container">
               <Cart 
               handleRemoveFormCart= {handleRemoveFormCart}
               cart={cart}></Cart>
            </div>
        
        </div>
    );
};

export default Home;