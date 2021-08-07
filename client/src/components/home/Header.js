import React from 'react';
import img_1 from '../images/1.png';
import img_2 from '../images/2.png';
import img_3 from '../images/3.png';
import img_4 from '../images/4.png';
import img_5 from '../images/5.png';
import img_6 from '../images/6.png';
import img_7 from '../images/7.png';
import img_8 from '../images/8.png';
import img_9 from '../images/9.png';
import './Header.css';

const Header = () => {
    return (
        <div style={{backgroundColor: 'whitesmoke'}}>
            <div className="header-container">
                <div className="header-item">
                    <img src={img_1} alt=""/>
                    <h4>Top Offers</h4>
                </div>
                <div className="header-item">
                    <img src={img_2} alt=""/>
                    <h4>Grocery</h4>
                </div>
                <div className="header-item">
                    <img src={img_3} alt=""/>
                    <h4>Mobiles</h4>
                </div>
                <div className="header-item">
                    <img src={img_4} alt=""/>
                    <h4>Fashion</h4>
                </div>
                <div className="header-item">
                    <img src={img_5} alt=""/>
                    <h4>Electronics</h4>
                </div>
                <div className="header-item">
                    <img src={img_6} alt=""/>
                    <h4>Home</h4>
                </div>
                <div className="header-item">
                    <img src={img_7} alt=""/>
                    <h4>Appliances</h4>
                </div>
                <div className="header-item">
                    <img src={img_8} alt=""/>
                    <h4>Travel</h4>
                </div>
                <div className="header-item">
                    <img src={img_9} alt=""/>
                    <h4>Beauty, Toys & More</h4>
                </div>
            </div>
            <hr style={{marginTop: 15, borderColor: 'whitesmoke'}} />
        </div>
    )
}

export default Header;
