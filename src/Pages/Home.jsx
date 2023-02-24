import React from "react";
import NavHeader from "../Components/NavHeader";
import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { BsHeadset } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { BsChatRightText } from "react-icons/bs";

const Home = () => {
  return (
    <div>
      <NavHeader />
      <Grid gap={20} margin={"auto"}>
        <GridItem w={"100%"}>
          <Image
            src="https://i.dell.com/is/image/DellContent//content/dam/ss2/page-specific/dell-homepage/apj/heroes/npl-cons-dell-alienware-r15-uhp-2304-06-ch-homepage-hero-lf-2400x696.png?fmt=png&op_usm=1.75,0.3,2,0&resMode=sharp2&size=1920,557&hei=557&wid=1920"
            w={"100%"}
            marginTop={"15px"}
          />
        </GridItem>
        <GridItem
          display={"grid"}
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
          ]}
          width={"90%"}
          margin={"auto"}
        >
          <Box>
            <Image src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/emea/module/cs2104r0006-586777-emea-cs-sb-sb-fy22q3w4-site-testing-banners-emea-1023x842-3.png?fmt=png-alpha&wid=1023&hei=842" />
          </Box>
          <Box margin={"auto"}>
            <Text fontSize="3xl" padding={"0.3rem"}>
              ALIENWARE X15 & X17
            </Text>
            <Text fontSize="4xl" padding={"0.3rem"}>
              ALIENWARE'S THINNEST LAPTOPS
            </Text>
            <Text fontSize="2xl" padding={"0.3rem"}>
              Introducing gaming laptops with exclusive quad fan technology.
            </Text>
            <Text fontSize="xl" padding={"0.3rem"}>
              X15 R2 | X17 R2
            </Text>
          </Box>
        </GridItem>
        <GridItem
          display={"grid"}
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
          ]}
          width={"90%"}
          margin={"auto"}
        >
          <Box margin={"auto"}>
            <Text fontSize="2xl" padding={"0.3rem"}>
              GAMING ACCESSORIES
            </Text>
            <Text fontSize="4xl" padding={"0.3rem"}>
              Powerful electronics & accessories
            </Text>
            <Text fontSize="2xl" padding={"0.3rem"}>
              Set the trend with high-performance gaming accessories.
            </Text>
            <Text fontSize="xl" padding={"0.3rem"}>
              Start Gaming
            </Text>
          </Box>
          <Box>
            <Image src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/banners/q4w1-gaming-warm-mod3-aw510h-aw610m-1023x842.png?fmt=png-alpha&wid=1023&hei=842" />
          </Box>
        </GridItem>
        <GridItem
          display={"grid"}
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
          ]}
          width={"90%"}
          margin={"auto"}
        >
          <Box margin={"auto"}>
            <Text fontSize="4xl" padding={"0.3rem"}>
              Dell Support
            </Text>

            <Text fontSize="xl" padding={"0.3rem"}>
              Get your questions answered
            </Text>
          </Box>
          <Box>
            <Box
              boxShadow={
                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
              }
              padding={"1rem"}
            >
              <Box w={"10%"}>
                <BsHeadset color="blue" size={"30px"} />
              </Box>
              <Box>
                <Text padding={"0.3rem"}>Contact Support</Text>
                <Text padding={"0.3rem"}>
                  Let us assist you with any product or service questions
                </Text>
              </Box>
            </Box>
            <Box
              boxShadow={
                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
              }
              padding={"1rem"}
            >
              <Box w={"10%"}>
                <IoCheckmarkDoneCircle color="blue" size={"30px"} />
              </Box>
              <Box>
                <Text padding={"0.3rem"}>Warranty and Contracts</Text>
                <Text padding={"0.3rem"}>Check warranty of the product</Text>
              </Box>
            </Box>

            <Box
              padding={"1rem"}
              // margin={" 5rem"}
              boxShadow={
                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
              }
            >
              <Box w={"10%"}>
                <BsChatRightText color="blue" size={"30px"} />
              </Box>
              <Box>
                <Text padding={"0.3rem"}>Product Support</Text>
                <Text padding={"0.3rem"}>
                  Expertise. Convenience. Quality Support.
                </Text>
              </Box>
            </Box>
            <Box
              boxShadow={
                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
              }
              padding={"1rem"}
            >
              <Box w={"10%"}>
                <FiSettings color="blue" size={"30px"} />
              </Box>
              <Box>
                <Text padding={"0.3rem"}>Drivers and Downloads</Text>
                <Text padding={"0.3rem"}>
                  Get the latest Drivers and Softwares
                </Text>
              </Box>
            </Box>
          </Box>
        </GridItem>
        <GridItem
          display={"grid"}
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
          ]}
          width={"90%"}
          margin={"auto"}
        >
          <Box margin={"auto"}>
            <Text fontSize="2xl" padding={"0.3rem"}>
              ALIENWARE 34 CURVED QD-OLED GAMING MONITOR
            </Text>
            <Text padding={"0.3rem"} fontSize="4xl">
              Discover the Meaning of Lifelike
            </Text>
            <Text padding={"0.3rem"} fontSize="2xl">
              The world's first QD-OLED gaming monitor redefines realistic
              gameplay.
            </Text>
            <Text padding={"0.3rem"} fontSize="xs">
              *T&C apply.
            </Text>
            <Text padding={"0.3rem"} fontSize="xl">
              Shop Now
            </Text>
          </Box>
          <Box>
            <Image src="https://i.dell.com/is/image/DellContent//content/dam/ss2/page-specific/dell-homepage/apj/modules/cs2204g0011-003-552584-gl-cs-co-fy22q3-site-banner-aw3423dw-monitor-1023x842.png?fmt=png-alpha&wid=1023&hei=842" />
          </Box>
        </GridItem>
        <GridItem
          display={"grid"}
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
          ]}
          width={"90%"}
          margin={"auto"}
        >
          <Box>
            <Box margin={"auto"}>
              <Text fontSize="2xl" padding={"0.4rem"}>
                GAMING DEALS
              </Text>
              <Text padding={"0.3rem"} fontSize="4xl">
                Savings Unleashed
              </Text>
              <Text padding={"0.3rem"} fontSize="2xl">
                Win big, save big on the latest tech. Get ₹6,500 instant
                discounts on net-banking & Alienware headsets. *T&C apply
              </Text>

              <Text padding={"0.3rem"} fontSize="xl">
                Gaming PC Deals
              </Text>
            </Box>

            <Box>
              <Image src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/2-ups/big-shopping-days-cons-dell-g-series-5525nt-uhp-2304-08-in-homepage-2-up-module-800x400.png?fmt=pjpg&pscan=auto&scl=1&wid=800&hei=400&qlt=100,0&resMode=sharp2&size=800,400&op_usm=1.75,0.3,2,0" />
            </Box>
          </Box>

          <Box>
            <Box margin={"auto"}>
              <Text fontSize="2xl" padding={"0.4rem"}>
                GAMING ACCESSORIES DEALS
              </Text>
              <Text padding={"0.3rem"} fontSize="4xl">
                Elevate your gaming experience
              </Text>
              <Text padding={"0.3rem"} fontSize="2xl">
                Set the trend with high-performance gaming accessories.
              </Text>

              <Text padding={"0.3rem"} fontSize="xl">
                Gaming Accessories
              </Text>
            </Box>

            <Box>
              <Box>
                <Image src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/banners/q4w1-gaming-warm-2updeal2-aw510m-aw510k-800x400.jpg?fmt=pjpg&pscan=auto&scl=1&wid=800&hei=400&qlt=100,0&resMode=sharp2&size=800,400&op_usm=1.75,0.3,2,0" />
              </Box>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Home;
