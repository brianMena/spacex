import React from "react";
import { FiCalendar } from "react-icons/fi";
import { Box, Tag, Spacer, Text, Flex, Button, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function LaunchItem(launch) {
  return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg">
      <Flex display="flex">
        <Text fontSize="2xl">
          Missions <strong>{launch.mission_name}</strong>({launch.launch_year})
        </Text>
        <Spacer />
        <Tag
          p={1}
          borderRadius="lg"
          colorScheme={launch.launch_success ? "green" : "red"}
        >
          {launch.launch_success ? "Succes" : "Failure"}
        </Tag>
      </Flex>
      <Flex alig="center">
        <Icon as={FiCalendar} color="grey" />
        <Text fontSize="sm" marginLeft={2}>
          {launch.launch_date_local.split("T")[0]}
        </Text>
      </Flex>
      <Link to={`/launch/${launch.flight_number}`}>
        <Button mt={2} colorScheme="blue">
          More details
        </Button>
      </Link>
    </Box>
  );
}
