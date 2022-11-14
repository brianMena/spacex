import React, { useState, useEffect, Fragment } from "react";
import { Heading } from "@chakra-ui/react";
import * as API from "../services/launches";
import { LaunchItem } from "../components/LaunchItem";

export default function LaunchesList() {
  const [launches, setLaunches] = useState([]);
  useEffect(() => {
    API.getAllLaunches().then(setLaunches).catch(console.log);
  }, []);

  return (
    <Fragment>
      <Heading as="h1" size="lg" m={4}>
        SpaceX Launches
      </Heading>
      {!launches.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <section>
          {launches.map((launch) => (
            <LaunchItem key={launch.flight_number} {...launch}></LaunchItem>
          ))}
        </section>
      )}
    </Fragment>
  );
}
