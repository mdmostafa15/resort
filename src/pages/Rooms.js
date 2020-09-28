import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";

function Rooms(props) {
  return (
    <div>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/resort" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
    </div>
  );
}

export default Rooms;