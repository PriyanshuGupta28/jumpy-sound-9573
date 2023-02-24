import React from "react";
import {
  Box,
  Input,
  Image,
  Flex,
  ButtonGroup,
  Button,
  Text,
} from "@chakra-ui/react";

import LoadingBar from "../Pages/LoadingBar";

import { BsSearch } from "@react-icons/all-files/bs/BsSearch";

import { Link as RouterLink } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";

const SearchBar = () => {
  const { loginWithRedirect } = useAuth0();

  const { logout } = useAuth0();

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <Text>
        <LoadingBar />
      </Text>
    );
  }

  return (
    <Box>
      <Flex
        justifyContent={"space-between"}
        margin={"auto"}
        flexDirection={["column", "column", "column", "row", "row", "row"]}
        alignItems={"center"}
      >
        <Box
          display={"flex"}
          marginLeft={"6"}
          marginTop={"3"}
          flexDirection={["column", "column", "row", "row", "row", "row"]}
          alignItems={"center"}
        >
          <Box margin={"auto"}>
            <RouterLink to="/">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/6/67/Dell_logo_2021.svg"
                w="10rem"
              />
            </RouterLink>
          </Box>
          <Box display={"flex"} marginLeft={"20"}>
            <Input
              placeholder="Search Dell"
              size="sm"
              width={["15rem", "20rem", "25rem", "35rem", "35rem", "35rem"]}
              border={"1px solid Grey"}
            />
            <Button paddingBottom={"2"}>
              <BsSearch size={"18px"} />
            </Button>
          </Box>
        </Box>
        <Box marginTop={"2"} marginLeft={"30"}>
          <ButtonGroup gap="7" marginRight={"4"} alignItems={"center"}>
            <Text>{isAuthenticated && <p>{user.name} </p>}</Text>
            <RouterLink to={"/cart"}>
              <Button gap={2}>
                Cart
                <AiOutlineShoppingCart size={"25px"} />
              </Button>
            </RouterLink>

            {isAuthenticated ? (
              <Button
                colorScheme="teal"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Logout
              </Button>
            ) : (
              <Button colorScheme="teal" onClick={() => loginWithRedirect()}>
                {/* <RouterLink to="/login"> Log in</RouterLink> */}
                Login
              </Button>
            )}
          </ButtonGroup>
        </Box>
      </Flex>
    </Box>
  );
};

export default SearchBar;
