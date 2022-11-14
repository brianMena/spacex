import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Hero({
  title,
  missionSubtitle,
  missionName,
  ctaLink,
  ctaText,
  ...rest
}) {
  return (
    <VStack
      w="full"
      h="full"
      spacing={10}
      alignItems={{ base: "center", md: "flex-start" }}
      p={{ base: "20px", md: "70px" }}
      pr={{ md: "220px" }}
      {...rest}
    >
      <Heading
        as="h1"
        size="xl"
        fontWeight="bold"
        color="white"
        textAlign={["center", "center", "left", "left"]}
      >
        {title}
      </Heading>
      <VStack spacing={3} alignItems={{ base: "center", md: "flex-start" }}>
        <Heading
          as="h2"
          size="md"
          fontWeight="regular"
          color="white"
          textAlign={["center", "center", "left", "left"]}
          textTransform="uppercase"
        >
          {missionSubtitle}
        </Heading>

        <Heading
          as="h3"
          size="lg"
          fontWeight="regular"
          color="white"
          textAlign={["center", "center", "left", "left"]}
          textTransform="uppercase"
        >
          {missionName}
        </Heading>
      </VStack>

      <Link to={ctaLink}>
        <Button
          variant="outline"
          color="white"
          py="4"
          px="4"
          lineHeight="1"
          size="md"
        >
          {ctaText}
        </Button>
      </Link>
    </VStack>
  );
}
