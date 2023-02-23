import React from "react";
import { Heading, Text, Button, Box } from "@chakra-ui/react";
import { RiAliensFill } from "react-icons/ri";

import { ImLaptop } from "react-icons/im";
import { SlScreenDesktop } from "react-icons/sl";

import { GoDeviceDesktop } from "react-icons/go";
import { ImHeadphones } from "react-icons/im";

const NavHeader = () => {
  return (
    <div>
      <Heading
        display={"flex"}
        justifyContent={"space-around"}
        flexDirection={["column", "row"]}
        backgroundColor={"white"}
      >
        <Box>
          <Button>
            <ImLaptop size={"30px"} />
          </Button>
          <Text fontSize="lg">Laptops</Text>
        </Box>
        <Box>
          <Button>
            <SlScreenDesktop size={"30px"} />
          </Button>
          <Text fontSize="lg">Desktops</Text>
        </Box>
        <Box>
          <Button>
            <RiAliensFill size={"30px"} />
          </Button>
          <Text fontSize="lg">Alienware</Text>
        </Box>
        <Box>
          <Button>
            <ImLaptop size={"30px"} />
          </Button>
          <Text fontSize="lg">Vostro</Text>
        </Box>
        <Box>
          <Button>
            <GoDeviceDesktop size={"30px"} />
          </Button>
          <Text fontSize="lg">Monitors</Text>
        </Box>
        <Box>
          <Button>
            <ImHeadphones size={"30px"} />
          </Button>
          <Text fontSize="lg">Accessories</Text>
        </Box>
      </Heading>
    </div>
  );
};

export default NavHeader;
