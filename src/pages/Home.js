import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";

function Home(props) {
  return (
    <div>
      <Hero>
        <Banner title="luxurius rooms" subtitle="delux rooms starting at $299">
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
    </div>
  );
}

export default Home;
