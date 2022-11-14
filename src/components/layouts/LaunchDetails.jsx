import React from "react";
import { useParams, Link } from "react-router-dom";
import * as API from "../../services/launches";
import { useState, useEffect, Fragment } from "react";
import { Box, Tag, Spacer, Text, Flex, Button, Icon } from "@chakra-ui/react";

export default function LaunchDetails() {
  const { launchId } = useParams();
  const [launches, setLaunches] = useState([]);
  useEffect(() => {
    API.getLaunchesByFlightNumber(launchId)
      .then(setLaunches)
      .catch(console.log);
  }, [launchId]);

  return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg">
      {!launches ? (
        <div>Loading...</div>
      ) : (
        <>
          <Flex display="flex">
            <Text fontSize="2xl">
              Missions <strong>{launches.mission_name}</strong>(
              {launches.launch_year})
            </Text>
            <Spacer />
            <Tag
              p={1}
              borderRadius="lg"
              colorScheme={launches.launch_success ? "green" : "red"}
            >
              {launches.launch_success ? "Succes" : "Failure"}
            </Tag>
          </Flex>
          <Box>
            Rocket: <Link to={`/rockets/${launches.rocket?.rocket_id}`}>
                {launches.rocket?.rocket_name}
            </Link>
          </Box>
        </>
      )}
    </Box>
  );
}
