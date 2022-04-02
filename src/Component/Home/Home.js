import React from 'react';
import useTshirt from '../Hooks/useTshirt';
import TShirt from '../TShirt/TShirt';
import './Home.css'
const Home = () => {
    const [tShirts, settShirts] = useTshirt()
    return (
        <div className='home-container'>
            <div className="tShirt-container">
             {
                 tShirts.map(tShirt=> <TShirt key={tShirt._id}
                    tShirt={tShirt}
                 ></TShirt>)
             }
            </div>
            <div className="cart-container">
                klsd;fj
            </div>
        
        </div>
    );
};

export default Home;