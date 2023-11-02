import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Button,
  Select,
  MenuItem,
  TextField,
  Grid,
  Box,
  IconButton,
} from "@mui/material";
import ProductListing from "@/components/ProductList";
import axios from "axios";
import { useRouter } from "next/router";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/login");
    } else {
      fetchData();
    }
  }, [sortOrder]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products?sort=${sortOrder}`
      );
      setProducts(response.data);
    } catch (error) {
      console.error("API call failed:", error);
    }
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const navigateToCart = () => {
    router.push("/cart");
  };
  const navigateToVendor = () => {
    router.push("/vendor");
  };

  const handleLogout = () => {
    localStorage.clear();
    router.push("/login");
  };

  return (
    <>
      <Box
        sx={{
          paddingLeft: "10%",
          paddingRight: "10%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Products Listing
        </Typography>
        <Box>
          <IconButton onClick={navigateToVendor}>
            <StorefrontIcon />
          </IconButton>
          <IconButton onClick={navigateToCart}>
            <ShoppingCartIcon />
          </IconButton>
          <IconButton color="primary" onClick={handleLogout}>
            <ExitToAppIcon />
          </IconButton>
        </Box>
      </Box>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Search by Name"
              value={searchTerm}
              onChange={handleSearchChange}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Select
              value={sortOrder}
              onChange={handleSortChange}
              variant="outlined"
              fullWidth
            >
              <MenuItem value="asc">Sort Ascending</MenuItem>
              <MenuItem value="desc">Sort Descending</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={10}>
          <Grid item xs={12}>
            <ProductListing products={filteredProducts} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
