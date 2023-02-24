import React from "react";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import SearchBar from "./SearchBar";
import { Link as RouterLink } from "react-router-dom";

const Links = [
  { path: "/apex", title: "APEX" },
  { path: "/deals", title: "Deals" },
  { path: "/products", title: "Products" },
  { path: "/solution", title: "Solution" },
  { path: "/findastore", title: "FindAStore" },
  { path: "/services", title: "Services" },
  { path: "/support", title: "Support" },
  { path: "/aboutus", title: "AboutUs" },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <SearchBar />
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={"center"}
            w={"full"}
            boxShadow={
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
            }
          >
            <HStack
              as={"nav"}
              spacing={8}
              display={{ base: "none", md: "flex" }}
              margin={"5px"}
              gap={"15px"}
            >
              {Links.map((link) => (
                <RouterLink to={link.path} key={link}>
                  {link.title}
                </RouterLink>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <RouterLink to={link.path} key={link}>
                  {link.title}
                </RouterLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default Navbar;
