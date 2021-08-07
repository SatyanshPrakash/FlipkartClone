import React from 'react'
import Header from './Header';
import Slide from './Products';
import { Box } from '@material-ui/core';
import banner_1 from '../images/poster_1.jpg';
import banner_2 from '../images/poster_2.jpg';
import banner_3 from '../images/poster_3.jpg';
import banner_4 from '../images/poster_4.jpg';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getProducts } from '../../actions/Products';

const Home = () => {
    const dispatch = useDispatch();
    const { productData } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);


    return (
        <div style={{backgroundColor: 'whitesmoke'}}>
            <Header />
            <Box style={{display: 'flex'}}>
                <Box style={{width: '78%'}}>
                    <Slide mainTitle={'Deal of the day'} timer={true} products={productData}/>
                </Box>
                <img src={banner_1} style={{width: '21%', height: '340px', margin: 11, marginLeft: 2}}/>
            </Box>
            <img src={banner_2} style={{width: '32%', margin: '.5rem'}}/>
            <img src={banner_3} style={{width: '32%', margin: '.5rem'}}/>
            <img src={banner_4} style={{width: '32%', margin: '.5rem'}}/>
            <Slide mainTitle={'Suggested for you'} timer={false} products={productData}/>
            <Slide mainTitle={'Best of Electronics'} timer={false}  products={productData}/>
            <Slide mainTitle={'Top picks for fashion'} timer={false} products={productData}/>
            <Slide mainTitle={'Top rated appliances for you'} timer={false} products={productData}/>
        </div>
    )
}

export default Home;
