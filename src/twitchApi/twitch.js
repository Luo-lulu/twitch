import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";

import Games from "./Games";
import Lol from "./Lol";
import "./twitch.css";
import Navbar from "./Nav";
import GameStreams from "./GameStreams";

function Twitch() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Games} />
          <Route path="/lol" component={Lol} />
          <Route path="/game/:id" component={GameStreams} />
        </Switch>
      </div>
    </Router>
  );
}
export default Twitch;
