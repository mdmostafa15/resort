import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"

function Room({ room }) { /*props from Featured.js*/
  const { name, slug, images, price } = room;
  // console.log("select first item from images array ", images[0]);
  return (
    <article className="room">
      <div className="img-container">
    {/* show the first image of feature room*/}
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

Room.prototype={
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
}