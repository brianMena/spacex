import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import LaunchesList from "./pages/LaunchesList";
import LaunchDetails from "./components/layouts/LaunchDetails";
import RocketDetails from "./components/RocketDetails";
import Landing from "./pages/Landing";

export function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="launch/:launchId" element={<LaunchDetails />} />
        <Route path="rockets/:rocketId" element={<RocketDetails />} />
      </Routes>
    </Fragment>
  );
}

export default App;
