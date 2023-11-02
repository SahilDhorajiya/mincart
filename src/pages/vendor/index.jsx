import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Vendor = () => {
  const [checkoutDetails, setCheckoutDetails] = useState([]);

  useEffect(() => {
    const checkoutDetailsFromStorage = localStorage.getItem("checkoutDetails");
    if (checkoutDetailsFromStorage) {
      const parsedCheckoutDetails = JSONhandler(checkoutDetailsFromStorage);
      setCheckoutDetails(parsedCheckoutDetails);
    }
    console.log("checkoutDetailsFromStorage", checkoutDetailsFromStorage);
  }, []);

  const JSONhandler = (DATA) => {
    try {
      return JSON.parse(DATA);
    } catch (err) {
      console.log("Error parsing checkout details");
      return [];
    }
  };
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Vendor Sales
      </Typography>
      <List>
        {checkoutDetails?.map((detail, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`Product: ${detail.title}`}
              secondary={`Price: $${detail.price.toFixed(2)}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Vendor;
