import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { MdLocalShipping } from "react-icons/md";
import {
  Box,
  Center,
  Text,
  Image,
  GridItem,
  Grid,
  Button,
} from "@chakra-ui/react";
import {
  chakra,
  Container,
  Stack,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";

const SingleProductPage = () => {
  const { id } = useParams();

  const [Data, setData] = useState([]);
  // console.log(id);
  const token = `fd3bd3b75b4898aa0e1871fc8eb084a4ca01863e4f13b244e1ba5e3653d41b4e0e1a144b392e6ae79f8a734d9c5bed296163391ddfb0bdb71b5d94ac8c8d0555f191f69ae545bf6f8281c52f527db87b88d60beb92ac449d3cd5b988a1e66c9a1494d215da5b6c22c5a3b4ff6c5b22ea02e9e2fb544419eba29a6c5a1d2cadb6`;
  useEffect(() => {
    axios
      .get(`https://api.device-specs.io/api/laptops/${id}?populate=*`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const { images, name, data, info, prices } = Data;

  return (
    <Box>
      {/* <Grid w={"80%"} gap={20} margin={"auto"}>
        <GridItem>
          <Center>
            <Image src="https://devices-api-prd.s3.eu-west-3.amazonaws.com/57413871ce598d16ad7467cfd4a8696b.jpg" />
          </Center>
          <Box>
            <Text>Title :- {name}</Text>
            <Text>Info:- {info}</Text>
            <Text>cpu_type:- {data.cpu.type}</Text>
            <Text>camera:- {data.camera.type}</Text>
            <Text>storage:- {data.storage.type}</Text>
            <Text>Brand:- {data.general.brand}</Text>
            <Text>Cores:- {data.cpu.number_of_cores}</Text>
            <Text>storage_type:- {data.storage.type}</Text>
            <Text>Color:- {data.design.color}</Text>
            <Text>software:-{data.software.os}</Text>
            <Text>Price :- {prices[0].currency} {prices[0].price}</Text>
            <Button variant={"link"}>Buy Now </Button>
          </Box>
        </GridItem>
      </Grid> */}
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
              src={
                "https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2022/08/img-2022-macbook-air-m2-review-fstoppers-30.jpg"
              }
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
                {name}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                {/* {[prices][0].currency} */}
                {prices[0].price}
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
                  Info:- {info}
                </Text>
                <Text fontSize={"lg"}>Info:- {info}</Text>
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
                    {/* <ListItem>cpu_type:- {data.cpu.type}</ListItem> */}
                    {/* <ListItem>camera:- {data.camera.type}</ListItem> */}
                    {/* <ListItem>storage:- {data.storage.type}</ListItem> */}
                    {/* <ListItem>Color:- {data.design.color}</ListItem> */}
                  </List>
                  <List spacing={2}>
                    {/* <ListItem>software:-{data.software.os}</ListItem> */}
                    {/* <ListItem>Brand:- {data.general.brand}</ListItem> */}
                    {/* <ListItem>Cores:- {data.cpu.number_of_cores}</ListItem> */}
                    {/* <ListItem>Sstorage_type:- {data.storage.type}</ListItem> */}
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
                      Between lugs:
                    </Text>{" "}
                    20 mm
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Bracelet:
                    </Text>{" "}
                    leather strap
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Case:
                    </Text>{" "}
                    Steel
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Case diameter:
                    </Text>{" "}
                    42 mm
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Dial color:
                    </Text>{" "}
                    Black
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Crystal:
                    </Text>{" "}
                    Domed, scratch‑resistant sapphire crystal with
                    anti‑reflective treatment inside
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Water resistance:
                    </Text>{" "}
                    5 bar (50 metres / 167 feet){" "}
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
