import React from "react";
import { Container } from "@mui/material";
import ProductDetails from "../../components/ProductDetails";
import axios from "axios";

const ProductPage = ({ product }) => {
  return (
    <Container maxWidth="md">
      <ProductDetails product={product} />
    </Container>
  );
};

export async function getStaticPaths() {
  const response = await axios.get("https://fakestoreapi.com/products");
  const products = response.data;

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    const product = response.data;

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error("API call failed:", error);
    return {
      props: {
        product: null,
      },
    };
  }
}

export default ProductPage;
