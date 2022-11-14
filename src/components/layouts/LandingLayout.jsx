import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { Flex } from "@chakra-ui/react";

export default function LandingLayout(props) {
  return (
    <Flex
      bgImage="url('src/assets/background_image.jpg')"
      bgPosition="cover"
      bgRepeat="no-repeat"
      bgSize="cover"
      direction="column"
      align={{ base: "center", md: "flex-start" }}
      maxW={{ xl: "1200px" }} //responsive
      m="0 auto"
      {...props}
    >
      <Header />
      {props.children}
      <Footer />
    </Flex>
  );
}
