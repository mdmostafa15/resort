import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import RoomsContainer from "../components/RoomsContainer";

function Rooms(props) {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/resort" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <section>
      <RoomsContainer/>
      </section>
    </>
  );
}

export default Rooms;
