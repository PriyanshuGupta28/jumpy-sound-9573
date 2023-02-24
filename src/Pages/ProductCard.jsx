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
  return (
    <div>
      <Grid>
        <GridItem>
          <Box
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              padding: "20px 10px",
            }}
          >
            <RouterLink to={`/products/${id}`}>
              <Center>
                <Image src={images} alt={name} />
              </Center>
            </RouterLink>
            <Stack>
              <Text fontSize="md">Laptop:- {name}</Text>
              <Text fontSize="md" fontFamily={"sans-serif"}>
                Info :- {info}
              </Text>
              <Text fontSize="md"> Price:- {}</Text>
              <RouterLink to={`/products/${id}`}>
                <Text fontSize="md" variant="outline">
                  <Button colorScheme="teal" variant="link">
                    Read More
                  </Button>
                </Text>
              </RouterLink>
              <Button colorScheme="teal" variant="outline">
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
