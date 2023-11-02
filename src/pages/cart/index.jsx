import CartItem from "@/components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Paper, Button, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { addToCheckout } from "@/Redux/slices/checkOutSlice";

const IndexPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <Typography variant="h4" align="center">
        Cart Items
      </Typography>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <Paper elevation={3} style={{ padding: "16px", marginTop: "20px" }}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6">
            Total: $
            {cartItems.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ShoppingCartIcon />}
            onClick={() => {
              //   cartItems.forEach((item) => {
              dispatch(addToCheckout(cartItems));
              //   });
              alert("All Cart Items are checkout");
            }}
          >
            Checkout
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default IndexPage;
