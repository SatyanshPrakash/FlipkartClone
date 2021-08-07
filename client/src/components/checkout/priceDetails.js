import React from 'react';
import {
    Box,
    Typography,
    Divider
  } from "@material-ui/core";
import { VerifiedUser } from "@material-ui/icons";
import { useSelector } from "react-redux";

const PriceDetails = ({ id }) => {
      const { cartCollection } = useSelector((state) => state.cartCollection);
      const { productData } = useSelector((state) => state.product);

  var price = 0;
  var discount = 0;
  // {
  //   cartCollection.map((element) =>
  //     productData.map((item) =>
  //       element === item.id
  //         ? ((price += item.price.mrp),
  //           (discount += item.price.mrp - item.price.cost))
  //         : null
  //     )
  //   );
  // }

  {id ? 
    productData.map((item) => 
      item.id === id ?
        ((price = item.price.mrp),
        (discount = item.price.mrp - item.price.cost))
        : null) : 
        cartCollection.map((element) =>
        productData.map((item) =>
        element === item.id
          ? ((price += item.price.mrp),
            (discount += item.price.mrp - item.price.cost))
          : null
      )
    );
  }

    return (
        <>
            <Typography style={{ color: "grey", fontWeight: 550, margin: "2%" }}>
            PRICE DETAILS
          </Typography>
          <Divider />
          <Box style={{ margin: "2%" }}>
            <Typography style={{ display: "flex", marginTop: "4%" }}>
              {id ? <Typography>Price(1 item)</Typography> : 
              <Typography>Price({cartCollection.length} items)</Typography>
              }
              <Typography style={{ marginLeft: "auto", marginRight: 5 }}>
                &#8377;{price}
              </Typography>
            </Typography>
            <Typography style={{ marginTop: "4%", display: "flex" }}>
              <Typography>Discount</Typography>
              <Typography
                style={{ marginLeft: "auto", marginRight: 5, color: "green" }}
              >
                - &#8377;{discount}
              </Typography>
            </Typography>
            <Typography style={{ margin: "4% 0", display: "flex" }}>
              <Typography>Delivery Charges</Typography>
              <Typography
                style={{ marginLeft: "auto", marginRight: 5, color: "green" }}
              >
                FREE
              </Typography>
            </Typography>
            <Divider />
            <Typography style={{ margin: "4% 0", display: "flex" }}>
              <Typography style={{ fontWeight: 550 }}>Total Amount</Typography>
              <Typography
                style={{ marginLeft: "auto", marginRight: 5, fontWeight: 550 }}
              >
                &#8377;{price - discount}
              </Typography>
            </Typography>
            <Divider />
            <Typography
              style={{ marginTop: "4%", color: "green", fontWeight: 550 }}
            >
              You will save &#8377;{discount} on this order
            </Typography>
          </Box>
          <Typography style={{marginTop: '3rem', display: 'flex'}}>
            <VerifiedUser style={{fontSize: 33, color: 'grey'}}/>
            <Typography style={{marginLeft: '1rem', color: 'grey', fontWeight: 550, fontSize: 14}}>Safe and Secure Payments. Easy return. 100% Authentic products</Typography>
          </Typography>
        </>
    )
}

export default PriceDetails;
