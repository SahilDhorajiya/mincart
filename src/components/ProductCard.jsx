import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";
import Link from "next/link";
import { addItem } from "@/Redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const addToCart = async (item) => {
    dispatch(addItem(item));
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "365px",
      }}
    >
      <CardMedia
        component="img"
        alt={product.title}
        height="200"
        image={product.image}
      />
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          sx={{
            width: "200px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            display: "inline-block",
            textOverflow: "ellipsis",
          }}
        >
          {product.title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            width: "200px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            display: "inline-block",
            textOverflow: "ellipsis",
          }}
        >
          {product.description}
        </Typography>
        <Typography variant="h6" color="primary">
          $ {product.price}
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              addToCart(product);
            }}
          >
            Add to Cart
          </Button>
          <Link href={`/product/${product.id}`} passHref>
            <Button variant="contained" color="primary">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
