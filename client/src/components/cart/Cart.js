import { Typography, Box, Button, Divider } from "@material-ui/core";
import React from "react";
import cartImg from "../images/cart.png";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCartData, removeItem } from "../../actions/Products";
import assured from "../images/assured.png";
import { LocationOn } from "@material-ui/icons";

const Cart = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();
  const dispatch = useDispatch();
  const { cartCollection } = useSelector((state) => state.cartCollection);
  const { productData } = useSelector((state) => state.product);

  const shopNow = () => {
    history.push("/");
  };

  const Remove = (id) => {
    dispatch(removeItem(id, user.result._id));
    dispatch(fetchCartData(user.result._id));
  }

  const checkout = () => {
    history.push('/checkout')
  }

  var price = 0;
  var discount = 0;
  {cartCollection.map((element) =>
    productData.map((item) =>
      element === item.id ? (
        price += item.price.mrp,
        discount += item.price.mrp - item.price.cost
        ) : null))}

        
  useEffect(() => {
    dispatch(fetchCartData(user.result._id));
  }, [dispatch]);


  return (
    <>
      {!user ? (
        <Box style={{ margin: 20, height: 430, backgroundColor: "white" }}>
          <Typography
            variant="h6"
            style={{ fontWeight: 550, fontSize: 17, padding: 13 }}
          >
            My Cart
          </Typography>
          <Box style={{ textAlign: "center" }}>
            <img src={cartImg} style={{ width: "18%", margin: 20 }} />
            <Typography>Missing Cart items?</Typography>
            <Typography style={{ fontSize: 12 }}>
              Login to see the items you added previosly
            </Typography>
            <Button
              style={{
                color: "white",
                textTransform: "none",
                backgroundColor: "#FB641B",
                margin: 20,
                padding: "9px 70px",
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
      ) : (
        <>
          {cartCollection.length ? (
            <Box style={{ display: "flex", backgroundColor: "whitesmoke" }}>
              <Box
                style={{
                  width: "65%",
                  marginTop: 15,
                  marginRight: 8,
                  marginLeft: 10,
                  backgroundColor: "white",
                  marginBottom: 30,
                }}
              >
                <Typography
                  style={{ display: "flex", marginTop: 20, marginLeft: 20 }}
                >
                  <Typography style={{ fontWeight: 550, fontSize: "1.1rem" }}>
                    My Cart({cartCollection.length})
                  </Typography>
                  <Typography
                    style={{
                      marginLeft: "auto",
                      marginRight: 30,
                      display: "flex",
                    }}
                  >
                    <LocationOn
                      style={{
                        fontSize: "1.4rem",
                        color: "blue",
                        paddingTop: 4,
                      }}
                    />
                    <Typography style={{ color: "grey", margin: "0 .4rem" }}>
                      Deliver to
                    </Typography>
                    <Typography>Varanasi - 221107</Typography>
                  </Typography>
                </Typography>
                <Divider style={{ marginTop: 30 }} />
                {cartCollection.map((element) =>
                  productData.map((item) =>
                    element === item.id ? (
                      <Box style={{ display: "flex", margin: "2.7rem 1rem" }}>
                        <Box>
                          <img style={{ width: "70%" }} src={item.url} />
                        </Box>
                        <Box style={{ marginLeft: "2rem" }}>
                          <Typography
                            style={{ fontSize: ".9rem", fontWeight: 550 }}
                          >
                            {item.title.longTitle}
                          </Typography>
                          <Typography style={{ display: "flex" }}>
                            <Typography
                              style={{ color: "grey", marginTop: "3%" }}
                            >
                              Seller:Goldex
                            </Typography>
                            <img
                              src={assured}
                              style={{
                                width: 60,
                                margin: "1rem 0",
                                marginLeft: "2%",
                              }}
                            />
                          </Typography>
                          <Typography style={{ display: "flex" }}>
                            <Typography
                              style={{
                                fontSize: "1.2rem",
                                fontWeight: 550,
                                marginRight: "1rem",
                              }}
                            >
                              &#8377;{item.price.cost}
                            </Typography>
                            <Typography
                              style={{ color: "grey", marginRight: "1rem" }}
                            >
                              <s>&#8377;{item.price.mrp}</s>
                            </Typography>
                            <Typography
                              style={{
                                color: "green",
                                fontWeight: 550,
                                fontSize: ".9rem",
                              }}
                            >
                              {item.price.discount} off
                            </Typography>
                          </Typography>
                          <Box>
                            <Button
                              style={{
                                fontWeight: 550,
                                fontSize: ".9rem",
                                padding: 0,
                                marginTop: "1.5rem",
                                marginRight: "1rem",
                              }}
                            >
                              SAVE FOR LATER
                            </Button>
                            <Button
                              onClick={() => Remove(item.id)}
                              style={{
                                fontWeight: 550,
                                fontSize: ".9rem",
                                padding: 0,
                                marginTop: "1.5rem",
                                marginRight: "1rem",
                              }}
                            >
                              REMOVE
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    ) : null
                  )
                )}
                <Divider />
                <Button
                  onClick={checkout}
                  style={{
                    display: "flex",
                    marginLeft: "auto",
                    marginRight: 25,
                    marginBottom: 25,
                    marginTop: 15,
                    color: "white",
                    backgroundColor: " #fb641b",
                    padding: "10px 52px",
                    fontWeight: 550,
                  }}
                >
                  Place Order
                </Button>
              </Box>
              <Box
                style={{
                  marginTop: 15,
                  marginRight: 10,
                  marginLeft: 8,
                  paddingLeft: 11,
                  height: "300px",
                  width: "35%",
                  backgroundColor: "white",
                }}
              >
                <Typography
                  style={{ color: "grey", fontWeight: 550, margin: "2%" }}
                >
                  PRICE DETAILS
                </Typography>
                <Divider />
                <Box style={{ margin: "2%" }}>
                  <Typography style={{ display: 'flex', marginTop: "4%"}}>
                    <Typography>
                      Price({cartCollection.length} items)
                    </Typography>
                    <Typography style={{marginLeft: 'auto', marginRight: 5}}>&#8377;{price}</Typography>
                  </Typography>
                  <Typography style={{ marginTop: "4%", display: 'flex' }}>
                    <Typography>Discount</Typography>
                    <Typography style={{marginLeft: 'auto', marginRight: 5, color: 'green'}}>- &#8377;{discount}</Typography>
                  </Typography>
                  <Typography style={{ margin: "4% 0", display: 'flex' }}>
                    <Typography>Delivery Charges</Typography>
                    <Typography style={{marginLeft: 'auto', marginRight: 5, color: 'green'}}>FREE</Typography>
                  </Typography>
                  <Divider />
                  <Typography style={{ margin: "4% 0", display: 'flex' }}>
                    <Typography style={{fontWeight: 550}}>Total Amount</Typography>
                    <Typography style={{marginLeft: 'auto', marginRight: 5, fontWeight: 550}}>&#8377;{price - discount}</Typography>
                  </Typography>
                  <Divider />
                  <Typography
                    style={{ marginTop: "4%", color: "green", fontWeight: 550 }}
                  >
                    You will save &#8377;{discount} on this order
                  </Typography>
                </Box>
              </Box>
            </Box>
          ) : (
            <Box style={{ margin: 20, height: 430, backgroundColor: "white" }}>
              <Typography
                variant="h6"
                style={{ fontWeight: 550, fontSize: 17, padding: 13 }}
              >
                My Cart
              </Typography>
              <Box style={{ textAlign: "center" }}>
                <img src={cartImg} style={{ width: "18%", margin: 20 }} />
                <Typography>Your cart is empty!</Typography>
                <Typography style={{ fontSize: 12 }}>
                  Add items to it now.
                </Typography>
                <Button
                  onClick={shopNow}
                  style={{
                    color: "white",
                    textTransform: "none",
                    backgroundColor: "#FB641B",
                    margin: 20,
                    padding: "9px 70px",
                  }}
                >
                  Shop now
                </Button>
              </Box>
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default Cart;
