import React from "react";
import { Link } from "react-router-dom";

function Room({ room }) {
  const { name, slug, images, price } = room;
  console.log("select first item from images array ", images[0]);
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0]} alt="single featured room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/resort/rooms/${slug}`} className="btn-primary room-link">
          Feature
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

export default Room;
