import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Grid, GridItem, Center, Image } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import axios from "axios";
import LoadingBar from "./LoadingBar";

const Products = () => {
  const [data, setData] = useState([]);

  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);

  const limit = 5;

  const token = `1e3ce70a0684465064fbbb0acee47fc5ec705d7f9ac34d22ef133f1bc3ff0311774ea90fc60240b5e8e9d43924d573e0d71a66cc74937ce90883454901bd7f3f411dddc26e9ba1226118cb925b08e48c459f971eaf052e719f4e9991af10598ec83f775d9365d294d4b93a28e1d97bd83f078a3e0bfd1993e8f98b93d8dedaa1`;

  const getData = () => {
    setLoading(true);
    axios
      .get(`https://api.device-specs.io/api/laptops?populate=*`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <LoadingBar />;
  }

  return (
    <div>
      <Navbar />
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
                  id={e.id}
                  name={e.name}
                  mpn={e.mpn}
                  info={e.info}
                  prices={e.prices[0].price}
                  // images={e.images[0].url}
                  images={
                    "https://devices-api-prd.s3.eu-west-3.amazonaws.com/57413871ce598d16ad7467cfd4a8696b.jpg"
                  }
                  cpu_type={e.main.cpu_type}
                  cpu_implementation={e.main.cpu_implementation}
                  cpu_number_of_cores={e.main.cpu_number_of_cores}
                  display_size__inch={e.main.display_size__inch}
                  memory_ram__gb={e.main.memory_ram__gb}
                  storage_type={e.main.storage_type}
                  storage_capacity__gb={e.main.storage_capacity__gb}
                  design_color_name={e.main.design_color_name}
                />
              </Center>
            </GridItem>
          );
        })}
      </Grid>
    </div>
  );
};

export default Products;
