import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Text,
  Image,
  Heading,
  Button,
} from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";

const Cart = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const HandleDelete = (i) => {
    // cart.forEach((el,i)=>{
    cart.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload();
    console.log(cart);
    // cart.splice(i,1)
    // })
  };
  cart = JSON.parse(localStorage.getItem("cart")) || [];

  var showlength = cart.length;

  var showprice = cart.reduce((acc, el) => acc + Number(el.price), 0);

  if (cart.length === 0) {
    return (
      <Heading mt={"100px"} mb={"150px"} textAlign={"center"}>
        Your Cart is Empty
      </Heading>
    );
  }
  return (
    <Box w={"80%"} margin="auto">
      <Text fontSize="lg">
        <Text as="b">{showlength}</Text> item in the cart
      </Text>
      <Text fontSize="lg">
        Total Price :- € <Text as="b">{showprice}</Text>
      </Text>
      <Grid
        mt={"40px"}
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
        gap={6}
      >
        {cart.map((prod, i) => (
          <GridItem
            textAlign={"center"}
            key={prod.id}
            h={"28rem"}
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              padding: "20px 10px",
              width: "100%",
              height: "28rem",
              position: "inherit",
            }}
          >
            <RouterLink to={`/products/${prod.id}`}>
              <Image w={"80%"} src={prod.images} margin={"auto "} />
            </RouterLink>

            <Heading fontSize={"18px"} margin={"5px"}>
              {prod.name}
            </Heading>
            <Text margin={"2px"}>Price :- € {prod.price}</Text>
            <Box>
              <RouterLink to={`/products/${prod.id}`}>
                <Button variant={"link"}>Read More </Button>
              </RouterLink>
            </Box>
            <Button
              onClick={() => HandleDelete(i)}
              bgColor={"black"}
              margin={"1rem"}
              color={"white"}
            >
              Delete
            </Button>
            <RouterLink to={"/buynow"}>
              <Button bgColor={"black"} margin={"1rem"} color={"white"}>
                Buy Now
              </Button>
            </RouterLink>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Cart;
