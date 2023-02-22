import React from "react";
import { Box, Input, Image, Flex, ButtonGroup, Button } from "@chakra-ui/react";

import { BsSearch } from "@react-icons/all-files/bs/BsSearch";

import { Link as RouterLink } from "react-router-dom";

const SearchBar = () => {
  return (
    <div>
      <Flex
        justifyContent={"space-between"}
        margin={"auto"}
        flexDirection={["column", "column", "column", "row", "row", "row"]}
      >
        <Box
          display={"flex"}
          marginLeft={"6"}
          marginTop={"3"}
          flexDirection={["column", "column", "row", "row", "row", "row"]}
        >
          <Box>
            <Button>
              <RouterLink to="/">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/6/67/Dell_logo_2021.svg"
                  w="10rem"
                />
              </RouterLink>
            </Button>
          </Box>
          <Box display={"flex"} marginLeft={"20"}>
            <Input
              placeholder="Search Dell"
              size="sm"
              width={["15rem", "35rem"]}
              border={"1px solid Grey"}
            />
            <Button>
              <BsSearch />
            </Button>
          </Box>
        </Box>
        <Box marginTop={"2"} marginLeft={"30"}>
          <ButtonGroup gap="7" marginRight={"4"}>
            <Button colorScheme="teal">
              <RouterLink to="/signup"> Sign Up</RouterLink>
            </Button>
            <Button colorScheme="teal">
              {" "}
              <RouterLink to="/login"> Log in</RouterLink>
            </Button>
          </ButtonGroup>
        </Box>
      </Flex>
    </div>
  );
};

export default SearchBar;
