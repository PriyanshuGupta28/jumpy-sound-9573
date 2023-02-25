import React from "react";
import { Heading, Text, Box, Center } from "@chakra-ui/react";
import { RiAliensFill } from "react-icons/ri";

import { ImLaptop } from "react-icons/im";
import { SlScreenDesktop } from "react-icons/sl";

import { GoDeviceDesktop } from "react-icons/go";
import { ImHeadphones } from "react-icons/im";

const NavHeader = () => {
  return (
    <Box
    // display={"grid"}
    // gridAutoColumns={[
    //   "repaet(2,1fr)",
    //   "repaet(3,1fr)",
    //   "repaet(3,1fr)",
    //   "repaet(3,1fr)",
    //   "repaet(6,1fr)",
    //   "repaet(6,1fr)",
    // ]}
    >
      <Heading
        display={"flex"}
        justifyContent={"space-around"}
        backgroundColor={"white"}
        width={"60%"}
        margin={"auto"}
        gap={"10px"}
        boxSizing={"inherit"}
        flex-wrap={"wrap"}
        flexDirection={["column", "column", "row", "row", "row", "row"]}
      >
        <Box>
          <Box>
            <Center>
              <ImLaptop size={"30px"} />
            </Center>
          </Box>
          <Center>
            <Text fontSize="lg">Laptops</Text>
          </Center>
        </Box>
        <Box>
          <Box>
            <Center>
              <SlScreenDesktop size={"30px"} />
            </Center>
          </Box>
          <Center>
            <Text fontSize="lg">Desktops</Text>
          </Center>
        </Box>
        <Box>
          <Box>
            <Center>
              <RiAliensFill size={"30px"} />
            </Center>
          </Box>
          <Center>
            <Text fontSize="lg">Alienware</Text>
          </Center>
        </Box>
        <Box>
          <Box>
            <Center>
              <ImLaptop size={"30px"} />
            </Center>
          </Box>
          <Center>
            <Text fontSize="lg">Vostro</Text>
          </Center>
        </Box>
        <Box>
          <Box>
            <Center>
              <GoDeviceDesktop size={"30px"} />
            </Center>
          </Box>
          <Center>
            <Text fontSize="lg">Monitors</Text>
          </Center>
        </Box>
        <Box>
          <Box>
            <Center>
              <ImHeadphones size={"30px"} />
            </Center>
          </Box>
          <Center>
            <Text fontSize="lg">Accessories</Text>
          </Center>
        </Box>
      </Heading>
    </Box>
  );
};

export default NavHeader;
