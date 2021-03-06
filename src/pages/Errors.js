import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";

/**
 * error page
 */
function Errors() {
  return (
    <div>
      <Hero>
        <Banner title="404">
          <Link to="/resort" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
    </div>
  );
}

export default Errors;
