import React, { useState, useEffect, Fragment } from "react";
import * as API from "../services/launches";
import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/LandingLayout";
import { FiMaximize } from "react-icons/fi";

export default function Landing() {
  const [launches, setLaunches] = useState([]);
  useEffect(() => {
    API.getAllLaunches().then(setLaunches).catch(console.log);
  }, []);

  const mostRecentLaunch = launches.map(launch);

  console.log(mostRecentLaunch);

  return (
    <LandingLayout>
      <Hero
        title="The world’s most advanced rockets and spacecraft. "
        missionSubtitle="Recent Launch"
        missionName="MissioN NAME"
        ctaText="View Details"
        ctaLink="/signup"
      />
    </LandingLayout>
  );
}
