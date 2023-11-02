import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const ProductDetails = ({ product }) => {
  return (
    <Container maxWidth="md">
      <Card>
        <CardMedia
          component="img"
          alt={product.title}
          height="400"
          image={product.image}
        />
        <CardContent>
          <Typography variant="h4" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {product.description}
          </Typography>
          <Typography variant="h6" color="primary">
            Price: ${product.price}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductDetails;
