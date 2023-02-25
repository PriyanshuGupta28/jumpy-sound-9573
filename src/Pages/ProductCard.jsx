import React from "react";
import {
  Grid,
  GridItem,
  Image,
  Text,
  Center,
  Box,
  Stack,
  Button,
} from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";

import { useToast } from "@chakra-ui/react";

const ProductCard = ({
  id,
  name,
  mpn,
  info,
  cpu_type,
  cpu_implementation,
  cpu_number_of_cores,
  display_size__inch,
  memory_ram__gb,
  storage_type,
  storage_capacity__gb,
  design_color_name,
  images,
  prices,
}) => {
  const toast = useToast();

  const HandleCart = (prod) => {
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];
    let alreadyincart = false;
    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i].id == prod.id) {
        alreadyincart = true;
        break;
      }
    }
    if (alreadyincart) {
      toast({
        description: "Product Already in Cart.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      cartData = [...cartData, prod];
      localStorage.setItem("cart", JSON.stringify(cartData));
      toast({
        description: "Product Added to Cart.",
        status: "success",
        duration: 6000,
        isClosable: true,
      });
      console.log(cartData);
    }
  };
  if (images)
    return (
      <div>
        <Grid>
          <GridItem>
            <Box
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                padding: "20px 10px",
                width: "100%",
                height: "31rem",
                position: "inherit",
              }}
            >
              <RouterLink to={`/products/${id}`}>
                <Center>
                  <Image
                    src={
                      images.length > 0
                        ? images[0].url
                        : "https://devices-api-prd.s3.eu-west-3.amazonaws.com/57413871ce598d16ad7467cfd4a8696b.jpg"
                    }
                    alt={name}
                    w={"90%"}
                  />
                </Center>
              </RouterLink>
              <Stack>
                <Text fontSize="md">Laptop:- {name}</Text>
                <Text fontSize="md" fontFamily={"sans-serif"}>
                  Info :- {info}
                </Text>
                <Text fontSize="md">
                  Price:-{prices[0]?.currency} {prices[0]?.price}
                </Text>
                <RouterLink to={`/products/${id}`}>
                  <Text fontSize="md" variant="outline">
                    <Button colorScheme="teal" variant="link">
                      Read More
                    </Button>
                  </Text>
                </RouterLink>
                <Button
                  colorScheme="teal"
                  variant="outline"
                  onClick={() =>
                    HandleCart({
                      id: id,
                      name: name,
                      price: prices[0]?.price,
                      images:
                        images.length > 0
                          ? images[0].url
                          : "https://devices-api-prd.s3.eu-west-3.amazonaws.com/57413871ce598d16ad7467cfd4a8696b.jpg",
                    })
                  }
                >
                  Add To Card
                </Button>
              </Stack>
            </Box>
          </GridItem>
        </Grid>
      </div>
    );
};

export default ProductCard;
