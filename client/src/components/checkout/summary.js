import React,{ useState } from 'react';
import {
    Box,
    Button,
    Typography,
} from "@material-ui/core";
  import assured from "../images/assured.png";
  import { useSelector } from "react-redux";

const Summary = ({ id }) => {
        const { cartCollection } = useSelector((state) => state.cartCollection);
        const { productData } = useSelector((state) => state.product);
        const [summary, setSummary] = useState(true);

        const summaryCard = () => {
          setSummary((prevSummary) => !prevSummary);
        };


    return (
        <>
            {summary ? (
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
                  3 ORDER SUMMARY
                </Typography>
                {id ?
                <Typography style={{ marginLeft: "1.3rem", marginTop: 5 }}>
                   1 item
                </Typography>
                :
                <Typography style={{ marginLeft: "1.3rem", marginTop: 5 }}>
                {cartCollection.length} item(s)
                </Typography>
                }
              </Typography>
              <Button
                onClick={summaryCard}
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
              <Box
                style={{
                  width: "98%",
                  backgroundColor: "white",
                  paddingBottom: "1px",
                }}
              >
                <Typography
                  style={{
                    display: "flex",
                    backgroundColor: "#2874f0",
                    color: "white",
                    padding: ".9rem",
                  }}
                >
                  <Typography style={{ marginRight: 5 }}>3</Typography>
                  <Typography style={{ fontWeight: 550 }}>
                    ORDER SUMMARY
                  </Typography>
                </Typography>
                {id ? (
                  productData.map((item) => 
                  item.id === id ? (
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
                    </Box>
                    </Box>
                ) : null )) : (
                cartCollection.map((element) => 
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
                              // onClick={() => Remove(item.id)}
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
                ))}
                <Box style={{ display: "flex", padding: "1rem 1.7rem" }}>
                  <Button
                    onClick={summaryCard}
                    style={{
                      background: "#fb641b",
                      color: "white",
                      fontWeight: 550,
                      marginLeft: "auto",
                      padding: ".7rem 3.8rem",
                    }}
                  >
                    CONTINUE
                  </Button>
                </Box>
              </Box>
          )}
        </>
    )
}

export default Summary;
