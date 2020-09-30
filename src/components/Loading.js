import React from "react";
import lodingArrowGif from "../images/gif/loading-arrow.gif";

function Loding(pops) {
  return (
    <div className="loading">
      <h4>rooms data loading</h4>
      <img src={lodingArrowGif} alt="loading rooms data" />
    </div>
  );
}

export default Loding;
