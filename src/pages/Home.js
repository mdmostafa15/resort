import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Services from "../components/Services";

function Home(props) {
  return (
    <>
      <Hero>
        <Banner title="luxurius rooms" subtitle="delux rooms starting at $299">
          <Link to="/resort/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services/>
    </>
  );
}

export default Home;
