import React, { useState } from 'react';
import {
    Box,
    Button,
    Typography,
    TextField
} from "@material-ui/core";


const Address = () => {
  const [address, setAddress] = useState(false);

  const addressCard = () => {
    setAddress((prevAddress) => !prevAddress);
  };


    return (
        <>
            {address ? (
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
                  2 DELIVERY ADDRESS
                </Typography>
                <Typography style={{ marginLeft: "1.3rem", marginTop: 5 }}>
                  Address
                </Typography>
              </Typography>
              <Button
                onClick={addressCard}
                style={{
                  margin: "1.3rem",
                  marginLeft: "auto",
                  border: "0.2rem solid whitesmoke",
                  color: "#2874f0",
                  padding: "0 35px",
                }}
              >
                CHANGE
              </Button>
            </Box>
          ) : (
            <>
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
                  <Typography style={{ marginRight: 5 }}>2</Typography>
                  <Typography style={{ fontWeight: 550 }}>
                    DELIVERY ADDRESS
                  </Typography>
                </Typography>
                <Box style={{ margin: "2rem", marginLeft: "4rem" }}>
                  <Button
                    style={{
                      background: "#2874f0",
                      color: "white",
                      fontWeight: 550,
                      textTransform: "none",
                      fontSize: 13,
                      padding: ".6rem 2rem",
                      borderRadius: 0,
                    }}
                  >
                    Use my current location
                  </Button>
                  <Box style={{ marginTop: "1.3rem" }}>
                    <TextField
                      style={{ width: "16rem" }}
                      variant="outlined"
                      label="Name"
                    ></TextField>
                    <TextField
                      style={{ marginLeft: "1rem", width: "16rem" }}
                      variant="outlined"
                      label="10-digit mobile number"
                    ></TextField>
                  </Box>
                  <Box style={{ marginTop: ".7rem" }}>
                    <TextField
                      style={{ width: "16rem" }}
                      variant="outlined"
                      label="Pincode"
                    ></TextField>
                    <TextField
                      style={{ marginLeft: "1rem", width: "16rem" }}
                      variant="outlined"
                      label="Locality"
                    ></TextField>
                  </Box>
                  <TextField
                    label="Address (Area and Street)"
                    variant="outlined"
                    rows="4"
                    style={{ width: "33rem", marginTop: ".7rem" }}
                  ></TextField>
                  <Box style={{ marginTop: ".7rem" }}>
                    <TextField
                      style={{ width: "16rem" }}
                      variant="outlined"
                      label="City/District/Town"
                    ></TextField>
                    <TextField
                      style={{ marginLeft: "1rem", width: "16rem" }}
                      variant="outlined"
                      label="State"
                    ></TextField>
                  </Box>
                  <Box style={{ marginTop: ".7rem" }}>
                    <TextField
                      style={{ width: "16rem" }}
                      variant="outlined"
                      label="Landmark (optional)"
                    ></TextField>
                    <TextField
                      style={{ marginLeft: "1rem", width: "16rem" }}
                      variant="outlined"
                      label="Alternate Phone (optional)"
                    ></TextField>
                  </Box>
                  <Box style={{ marginTop: "2.3rem" }}>
                    <Button
                      onClick={addressCard}
                      style={{
                        background: "#fb641b",
                        color: "white",
                        fontWeight: 550,
                        padding: ".8rem 2rem",
                        borderRadius: 0,
                      }}
                    >
                      SAVE AND DELIVER HERE
                    </Button>
                    <Button
                      style={{
                        color: " #2874f0",
                        marginLeft: "1.3rem",
                        fontWeight: 550,
                      }}
                    >
                      Cancel
                    </Button>
                  </Box>
                </Box>
              </Box>
            </>
          )}
        </>
    )
}

export default Address;
