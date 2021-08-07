import React, { useState } from "react";
import {
  Box,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import Login from './login';
import Address from "./address";
import Summary from "./summary";
import Payment from "./payment";
import PriceDetails from "./priceDetails";


const Checkout = ({ match }) => {
  const id = match.params.id;
  

  return (
    <>
      <Box style={{ backgroundColor: "whitesmoke", display: 'flex' }}>


        <Box style={{ margin: "1rem", width: "68%" }}>
          <Login />
          <Address />
          <Summary id={id}/>
          <Payment />
        </Box>

        <Box
          style={{
            marginTop: 31,
            marginRight: 10,
            paddingLeft: 11,
            height: "300px",
            width: "35%",
            backgroundColor: "white",
          }}
        > 
          <PriceDetails id={id}/>
        </Box>


      </Box>
    </>
  );
};

export default Checkout;
