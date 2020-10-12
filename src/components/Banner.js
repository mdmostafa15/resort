import React from "react";
/**
 * Background image of banner section of pages
 * @param {*} param0
 */
function Banner({ children, title, subtitle }) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}

export default Banner;
