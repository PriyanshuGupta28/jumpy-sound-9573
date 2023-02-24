import React from "react";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <Box>
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={"flex-start"}>
              <ListHeader>Product</ListHeader>
              <Link href={"#"}>Overview</Link>
              <Stack direction={"row"} align={"center"} spacing={2}>
                <Link href={"#"}>Features</Link>
                <Tag
                  size={"sm"}
                  bg={useColorModeValue("blue.300", "blue.800")}
                  ml={2}
                  color={"white"}
                >
                  New
                </Tag>
              </Stack>
              <Link href={"#"}>Tutorials</Link>
              <Link href={"#"}>Pricing</Link>
              <Link href={"#"}>Releases</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Company</ListHeader>
              <Link href={"#"}>About Us</Link>
              <Link href={"#"}>Press</Link>
              <Link href={"#"}>Careers</Link>
              <Link href={"#"}>Contact Us</Link>
              <Link href={"#"}>Partners</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Legal</ListHeader>
              <Link href={"#"}>Cookies Policy</Link>
              <Link href={"#"}>Privacy Policy</Link>
              <Link href={"#"}>Terms of Service</Link>
              <Link href={"#"}>Law Enforcement</Link>
              <Link href={"#"}>Status</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Follow Us</ListHeader>
              <Link href={"#"}>Facebook</Link>
              <Link href={"#"}>Twitter</Link>
              <Link href={"#"}>Dribbble</Link>
              <Link href={"#"}>Instagram</Link>
              <Link href={"#"}>LinkedIn</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={"center"}
            _before={{
              content: '""',
              borderBottom: "1px solid",
              borderColor: useColorModeValue("gray.200", "gray.700"),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: "1px solid",
              borderColor: useColorModeValue("gray.200", "gray.700"),
              flexGrow: 1,
              ml: 8,
            }}
          >
            <Image
              w={"10%"}
              src="data:image/png;base64,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"
            />
          </Flex>
          <Text pt={6} fontSize={"sm"} textAlign={"center"}>
            © 2022 Dell. All rights reserved
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
