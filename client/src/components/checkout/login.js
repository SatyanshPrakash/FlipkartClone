import React, { useState } from 'react';
import {
    Box,
    Button,
    Typography,
} from "@material-ui/core";
import { Done, LocalShipping, Notifications, Star } from "@material-ui/icons";

const Login = () => {
    const user = JSON.parse(localStorage.getItem("profile"));
    const [login, setLogin] = useState(true);

    const loginCard = () => {
      setLogin((prevLogin) => !prevLogin);
    };
  

    return (
        <>
        {login ? (
            <Box
              style={{
                display: "flex",
                backgroundColor: "white",
                margin: "1rem",
                marginLeft: ".3rem",
              }}
            >
              <Typography style={{ margin: "1rem" }}>
                <Typography style={{ color: "grey", fontWeight: 550 }}>
                  1 LOGIN <Done style={{ color: "blue", paddingTop: 6 }} />
                </Typography>
                <Typography
                  style={{ marginLeft: "1.3rem", fontSize: 14, marginTop: 5 }}
                >
                  +91{user.result.mobileNumber}
                </Typography>
              </Typography>
              <Button
                onClick={loginCard}
                style={{
                  margin: "1.3rem",
                  marginLeft: "auto",
                  border: "0.2rem solid whitesmoke",
                  color: "blue",
                  padding: "0 35px",
                }}
              >
                CHANGE
              </Button>
            </Box>
          ) : (
            <Box style={{ width: "98%" }}>
              <Typography
                style={{
                  display: "flex",
                  backgroundColor: "#2874f0",
                  color: "white",
                  padding: ".9rem",
                }}
              >
                <Typography style={{ marginRight: 5 }}>1</Typography>
                <Typography style={{ fontWeight: 550 }}>LOGIN</Typography>
              </Typography>
              <Box style={{ backgroundColor: "white" }}>
                <Box
                  style={{
                    display: "flex",
                    backgroundColor: "white",
                    padding: "1rem 3rem",
                  }}
                >
                  <Box>
                    <Typography style={{ display: "flex" }}>
                      <Typography
                        style={{ marginRight: 10, fontSize: 13, color: "grey" }}
                      >
                        Phone
                      </Typography>
                      <Typography style={{ fontSize: 13, fontWeight: 550 }}>
                        +91{user.result.mobileNumber}
                      </Typography>
                    </Typography>
                    <Typography
                      style={{
                        margin: ".8rem 0",
                        fontSize: 14,
                        fontWeight: 550,
                        color: "#2874f0",
                      }}
                    >
                      Logout & Sign in to another account
                    </Typography>
                    <Button
                      onClick={loginCard}
                      style={{
                        backgroundColor: "#fb641b",
                        color: "white",
                        fontWeight: 550,
                        padding: ".6rem 2rem",
                      }}
                    >
                      CONTINUE CHECKOUT
                    </Button>
                  </Box>
                  <Box style={{ margin: "0 1rem", marginLeft: "9rem" }}>
                    <Typography style={{ color: "grey", fontSize: 13 }}>
                      Advantages of our secure login
                    </Typography>
                    <Typography style={{ fontSize: 13, marginTop: ".9rem" }}>
                      <LocalShipping
                        style={{
                          color: "#2874f0",
                          fontSize: 19,
                          marginRight: 10,
                        }}
                      />
                      Easily Track Orders, Hassle free Returns
                    </Typography>
                    <Typography style={{ fontSize: 13, marginTop: ".9rem" }}>
                      <Notifications
                        style={{
                          color: "#2874f0",
                          fontSize: 19,
                          marginRight: 10,
                        }}
                      />
                      Get Relevant Alerts and Recommendation
                    </Typography>
                    <Typography style={{ fontSize: 13, marginTop: ".9rem" }}>
                      <Star
                        style={{
                          color: "#2874f0",
                          fontSize: 19,
                          marginRight: 10,
                        }}
                      />
                      Wishlist, Reviews, Ratings and more.
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  style={{
                    fontSize: 13,
                    color: "grey",
                    margin: "1rem 3rem",
                    paddingBottom: "1rem",
                  }}
                >
                  Please Note that upon clicking "Logout" you will lose all
                  items in cart and will be redirected to Flipkart home page.
                </Typography>
              </Box>
            </Box>
          )}
        </>
    )
}

export default Login;
