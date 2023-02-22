import React from "react";
import {
  Box,
  Input,
  Image,
  Flex,
  ButtonGroup,
  Button,
  Spacer,
} from "@chakra-ui/react";

import { BsSearch } from "@react-icons/all-files/bs/BsSearch";

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
          flexDirection={["column", "column", "column", "row", "row", "row"]}
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/67/Dell_logo_2021.svg"
            w="180px"
          />
          <Box display={"flex"} marginLeft={"20"}>
            <Input placeholder="Search" size="sm" width={["15rem", "30rem"]} />
            <Button>
              <BsSearch />
            </Button>
          </Box>
        </Box>
        <Box marginTop={"4"} marginLeft={"30"}>
          <ButtonGroup gap="7">
            <Button colorScheme="teal">Sign Up</Button>
            <Button colorScheme="teal">Log in</Button>
          </ButtonGroup>
        </Box>
      </Flex>
    </div>
  );
};

export default SearchBar;
