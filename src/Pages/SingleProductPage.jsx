import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { MdLocalShipping } from "react-icons/md";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import {
  Container,
  Stack,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";

const SingleProductPage = () => {
  const { id } = useParams();

  const toast = useToast();

  const [Data, setData] = useState([]);

  console.log(id);

  const token = `fd3bd3b75b4898aa0e1871fc8eb084a4ca01863e4f13b244e1ba5e3653d41b4e0e1a144b392e6ae79f8a734d9c5bed296163391ddfb0bdb71b5d94ac8c8d0555f191f69ae545bf6f8281c52f527db87b88d60beb92ac449d3cd5b988a1e66c9a1494d215da5b6c22c5a3b4ff6c5b22ea02e9e2fb544419eba29a6c5a1d2cadb6`;
  useEffect(() => {
    axios
      .get(`https://api.device-specs.io/api/laptops/${id}?populate=*`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const { data } = Data;

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
    }
  };

  return (
    <Box>
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={data?.images[0]?.url}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "400px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {data?.name}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                {data?.prices[0]?.currency} :-
                {data?.prices[0]?.price}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={"2xl"}
                  fontWeight={"300"}
                >
                  {data?.info}
                </Text>
                <Text fontSize={"lg"}>{data?.info}</Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("blue.600", "blue.400")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Features
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Cpu_type:- {data?.data?.cpu?.type}</ListItem>
                    <ListItem>Camera:- {data?.data?.camera?.type}</ListItem>
                    <ListItem>
                      Storage:- {data?.data?.storage?.capacity__gb}
                    </ListItem>
                    <ListItem>Color:- {data?.data?.design?.color}</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Software:-{data?.data?.software?.os}</ListItem>
                    <ListItem>Brand:- {data?.data?.general?.brand}</ListItem>
                    <ListItem>
                      Cores:- {data?.data?.cpu?.number_of_cores}
                    </ListItem>
                    <ListItem>
                      Storage_type:- {data?.data?.storage?.type}
                    </ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("blue.600", "blue.400")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Product Details
                </Text>

                <List spacing={2}>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Panel:
                    </Text>
                    {data?.data?.display?.panel}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Resolution :
                    </Text>{" "}
                    {data?.data?.display?.resolution__pixels}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Ratio :
                    </Text>{" "}
                    {data?.data?.display?.ratio}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Hd:
                    </Text>{" "}
                    {data?.data?.display?.hd_type}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Battery:
                    </Text>{" "}
                    {data?.data?.battery?.technology}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Memory Gb:
                    </Text>{" "}
                    {data?.data?.memory?.ram__gb}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Network (Wifi):
                    </Text>{" "}
                    {data?.data?.network?.wifi_standards}
                  </ListItem>
                </List>
              </Box>
            </Stack>

            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
              onClick={() =>
                HandleCart({
                  id: id,
                  name: data?.name,
                  images: data?.images[0]?.url,
                  price: data?.prices[0]?.price,
                })
              }
            >
              Add to cart
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default SingleProductPage;
