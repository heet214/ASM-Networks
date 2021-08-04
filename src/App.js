import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
// import Navba from "./Navbar";
import Navigation from "./Navigation";
import Footer from "./Footer";
import About from "./About";
import Maps from "./Maps";
import Contact from "./Contact";
import "./App.css";
import ServicePage from "./ServicePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <ScrollToTop>
            <Route exact path="/">
              <Navigation />
              <Home />
              <Footer />
            </Route>
            <Route path="/Services">
              <Navigation />
              <ServicePage />
              <Footer />
            </Route>

            <Route path="/About-Us">
              <Navigation />
              <About />
              <Footer />
            </Route>

            <Route path="/Contact-Us">
              <Navigation />
              <Contact />
              <Footer />
            </Route>
          </ScrollToTop>
        </Switch>
      </Router>
    </>
  );
}
