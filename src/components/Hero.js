import React from "react";
/**
 *
 * @param {*} param0
 */
function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

Hero.defaultProps = {
  hero: "defaultHero",
};

export default Hero;
