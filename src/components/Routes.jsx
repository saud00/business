import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Ourmaterials from "./pages/Ourmaterials";
import Contact from "./pages/Contact";
import User from "./pages/User";
import Navbar from "./supporting/Navbar";
import PrdDetails from "./supporting/PrdDetails";
import Footer from "./supporting/Footer";
import Aboutus from "./supporting/aboutus";

const Routes = () => {
  const Error = () => {
    <div>
      <title>This page does not exist in cloud</title>
    </div>;
  };

  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Ourmaterials" component={Ourmaterials} />
          <Route exact path="/details/:id" component={PrdDetails} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/aboutus" component={Aboutus} />
          <Route exact path="/User" component={User} />
          <Route exact path="/:name" component={Men} />
          <Route component={Error} />
        </Switch>

        <Footer />
      </>
    </Router>
  );
};

export default Routes;
