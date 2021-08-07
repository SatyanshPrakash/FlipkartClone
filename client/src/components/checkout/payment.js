import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { payUsingPaytm } from "../../api";
import { post } from "../../utils/paytm";

const Payment = () => {
  const [payment, setPayment] = useState(true);

  const paymentCard = () => {
    setPayment((prevPayment) => !prevPayment);
  };

  const buyNow = async() => {
    const response = await payUsingPaytm({ amount: '500', email: 'satyanshsinghv@gmail.com' });
    const information = {
      action: 'https://securegw-stage.paytm.in/order/process',
      params: response
    }
    post(information);
  }

  return (
    <>
      {payment ? (
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
              4 PAYMENT OPTIONS
            </Typography>
            <Typography style={{ marginLeft: "1.3rem", marginTop: 5 }}>
              Payment
            </Typography>
          </Typography>
          <Button
            onClick={paymentCard}
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
            <Typography style={{ marginRight: 5 }}>4</Typography>
            <Typography style={{ fontWeight: 550 }}>PAYMENT OPTIONS</Typography>
          </Typography>

          <FormControl component="fieldset">
            <RadioGroup
              style={{ margin: "2rem", marginTop: "1rem" }}
            >
              <FormControlLabel
                control={<Radio />}
                disabled
                label="UPI"
              />
              <FormControlLabel
                control={<Radio />}
                label="Paytm"
              />
              <FormControlLabel
                control={<Radio />}
                disabled
                label="Credit / Debit / ATM Card"
              />
              <FormControlLabel
                control={<Radio />}
                disabled
                label="Net Banking"
              />
              <FormControlLabel
                control={<Radio />}
                disabled
                label="Cash On Delivery"
              />
              <FormControlLabel
                disabled
                control={<Radio />}
                label="EMI (Easy Installments)"
              />
            </RadioGroup>
            <Button
              onClick={buyNow}
              style={{
                background: "rgb(251, 100, 27)",
                color: "white",
                fontWeight: 550,
                fontSize: "0.875rem",
                marginLeft: "35rem",
                padding: ".7rem 4rem",
                marginBottom: "1rem",
              }}
            >
              CONTINUE
            </Button>
          </FormControl>
        </Box>
      )}
    </>
  );
};

export default Payment;
