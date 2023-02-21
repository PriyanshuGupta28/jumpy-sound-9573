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
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Box flexShrink={0}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/67/Dell_logo_2021.svg"
            w="180px"
          />
        </Box>
        <Box display={"flex"}>
          <Input placeholder="Search" size="sm" w={"50rem"} />
          <BsSearch />
        </Box>
        <Box>
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
