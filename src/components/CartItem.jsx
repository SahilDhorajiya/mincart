import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "@/Redux/slices/cartSlice";
import {
  Grid,
  Typography,
  IconButton,
  TextField,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Box,
  FormControl,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeItem(item));
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
  };

  const subtotal = item.price * item.quantity;

  return (
    <Card>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardMedia
            component="img"
            alt={item.name}
            height="100px"
            image={item.image}
            sx={{
              objectFit: "contain",
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <CardContent>
            <Typography variant="h6">{item.name}</Typography>
            <Typography variant="body1">Price: ${item.price}</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: "5px 0px",
              }}
            >
              <Typography variant="body1">Quantity:</Typography>
              <FormControl sx={{ width: "60px" }}>
                <TextField
                  type="number"
                  size="small"
                  value={item.quantity}
                  onChange={handleQuantityChange}
                  inputProps={{ min: 1 }}
                />
              </FormControl>
            </Box>
            <Typography variant="body1">Subtotal: ${subtotal}</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <CardActions>
            <Box>
              <IconButton
                aria-label="Remove from Cart"
                color="error"
                onClick={handleRemoveFromCart}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CartItem;
