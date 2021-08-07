import React, { useEffect } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import assured from "../images/assured.png";
import { getProductDetails, toCart } from "../../actions/Products";
import { ShoppingCart, FlashOn, Star, LocalOffer } from "@material-ui/icons";
import { useHistory } from 'react-router-dom';

const ProductDetails = ({ match }) => {
  const { productDetail } = useSelector((state) => state.productData);
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch]);


  const addToCart =() => {
    history.push(`/cart/product/${match.params.id}`)
    if(user) {
      dispatch(toCart(match.params.id, user.result._id));
    }  
  }

  const buyNow = () => {
    history.push(`/buyNow/product/${match.params.id}`)
  }


  return (
    <>
      <Box style={{ display: "flex", margin: "20px 60px" }}>
        <Box style={{ width: "40%" }}>
          <img src={productDetail.url} style={{ width: "80%" }} />
          <Button
            onClick={addToCart}
            style={{
              backgroundColor: "grey",
              color: "white",
              padding: "12px 30px",
              marginRight: 10,
              marginTop: 8,
            }}
          >
            <ShoppingCart /> ADD TO CART
          </Button>
          <Button
            onClick={buyNow}
            style={{
              backgroundColor: "#fb641b",
              padding: "12px 40px",
              marginTop: 8,
              color: "white",
            }}
          >
            <FlashOn />
            BUY NOW
          </Button>
        </Box>
        <Box style={{ width: "60%" }}>
          <Typography style={{ fontSize: 12, color: "grey" }}>
            {productDetail?.title?.shortTitle}
          </Typography>
          <Typography>{productDetail?.title?.longTitle}</Typography>
          <Typography style={{ display: "flex", marginTop: 10 }}>
            <Typography
              style={{
                backgroundColor: "green",
                color: "white",
                borderRadius: 5,
                fontSize: 13,
                width: 45,
                paddingLeft: 10,
              }}
            >
              4.3
              <Star style={{ fontSize: 12 }} />
            </Typography>
            <Typography
              style={{
                fontSize: 12,
                color: "grey",
                marginLeft: 8,
                fontWeight: 550,
              }}
            >
              20,791 Ratings & 2388 Reviews
            </Typography>
            <img src={assured} style={{ width: 70, marginLeft: 14 }} />
          </Typography>
          <Typography
            style={{
              color: "green",
              fontSize: 13,
              fontWeight: 550,
              marginTop: 13,
            }}
          >
            Special price
          </Typography>

          <Typography style={{ display: "flex" }}>
            <Typography style={{ fontSize: 27, fontWeight: 550 }}>
              &#8377;{productDetail?.price?.cost}
            </Typography>
            <Typography
              style={{ color: "grey", marginTop: 10, marginLeft: 12 }}
            >
              <s>&#8377;{productDetail?.price?.mrp}</s>
            </Typography>
            <Typography
              style={{
                color: "green",
                fontWeight: 550,
                marginTop: 10,
                marginLeft: 12,
              }}
            >
              {productDetail?.price?.discount} off
            </Typography>
          </Typography>
          <Typography style={{ marginTop: 8, fontWeight: 550 }}>
            Available offers
          </Typography>
          <Typography style={{ marginTop: 5, fontSize: 14 }}>
            <LocalOffer style={{ color: "green", fontSize: 20 }} />
            Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card
            T&C
          </Typography>
          <Typography style={{ marginTop: 5, fontSize: 14 }}>
            <LocalOffer style={{ color: "green", fontSize: 20 }} />
            Bank Offer 20% off on 1st txn with Amex Network Cards issued by
            ICICI Bank,IndusInd Bank,SBI Cards and Mobikwik T&C
          </Typography>
          <Typography style={{ marginTop: 5, fontSize: 14 }}>
            <LocalOffer style={{ color: "green", fontSize: 20 }} />
            Bank Offer 10% Off on Bank of Baroda Mastercard debit card first
            time transaction, Terms and Condition apply T&C
          </Typography>
          <Typography style={{ marginTop: 5, fontSize: 14 }}>
            <LocalOffer style={{ color: "green", fontSize: 20 }} />
            Special PriceGet extra 5% off (price inclusive of discount) T&C
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ProductDetails;
