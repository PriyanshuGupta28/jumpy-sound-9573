import React, { useState, useEffect } from "react";
import { Grid, GridItem, Center, Button, Text, Box } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import axios from "axios";
import LoadingBar from "./LoadingBar";
// import { useParams } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);

  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);

  const limit = 20;

  const token = `fd3bd3b75b4898aa0e1871fc8eb084a4ca01863e4f13b244e1ba5e3653d41b4e0e1a144b392e6ae79f8a734d9c5bed296163391ddfb0bdb71b5d94ac8c8d0555f191f69ae545bf6f8281c52f527db87b88d60beb92ac449d3cd5b988a1e66c9a1494d215da5b6c22c5a3b4ff6c5b22ea02e9e2fb544419eba29a6c5a1d2cadb6`;

  const getData = () => {
    setLoading(true);
    axios
      .get(
        `https://api.device-specs.io/api/laptops?populate=*&pagination[start]=${page}&pagination[limit]=${limit}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        setData(res.data.data);
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  if (loading) {
    return <LoadingBar />;
  }

  return (
    <div>
      <Grid
        w={"80%"}
        gridTemplateColumns={[
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(2,1fr)",
          "repeat(3,1fr)",
          "repeat(4,1fr)",
          "repeat(4,1fr)",
        ]}
        gap={20}
        margin={"auto"}
      >
        {data?.map((e) => {
          return (
            <GridItem key={e.id}>
              <Center>
                <ProductCard
                  id={e?.id}
                  name={e?.name}
                  mpn={e?.mpn}
                  info={e?.info}
                  prices={e?.prices}
                  // images={e.images[0].url}
                  images={e?.images}
                  // cpu_type={e.main.cpu_type}
                  // cpu_implementation={e.main.cpu_implementation}
                  // cpu_number_of_cores={e.main.cpu_number_of_cores}
                  // display_size__inch={e.main.display_size__inch}
                  // memory_ram__gb={e.main.memory_ram__gb}
                  // storage_type={e.main.storage_type}
                  // storage_capacity__gb={e.main.storage_capacity__gb}
                  // design_color_name={e.main.design_color_name}
                />
              </Center>
            </GridItem>
          );
        })}
      </Grid>
      <Box padding={"2rem"} margin={"auto"}>
        <Center gap={"1rem"}>
          <Button isDisabled={page === 1} onClick={() => setPage(page - 1)}>
            Prev
          </Button>
          <Text>{page}</Text>
          <Button onClick={() => setPage(page + 1)}>Next</Button>
        </Center>
      </Box>
    </div>
  );
};

export default Products;
