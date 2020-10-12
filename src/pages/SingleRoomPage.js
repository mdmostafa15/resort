import React, { Component } from "react";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import defaultBgImg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import StyleSingleRoomHero from "../components/StyleSingleRoomHero";

/**
 * singleRoom page class
 */
class SingleRoomPage extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBgImg,
    };
  }

  static contextType = RoomContext;

  render() {
    const { getSingleRoom } = this.context;
    console.log(this.state.slug);
    const room = getSingleRoom(this.state.slug);
    console.log(room);
    if (!room) {
      return (
        <div className="error">
          <h3>no ruch room could be fund...</h3>
          <Link to="/resort/rooms" className="btn btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    // destructure room
    const {
      name,
      price,
      size,
      capacity,
      pets,
      breakfast,
      description,
      extras,
      images,
    } = room;
    // destructuring images
    const [heroImg, ...restOfImages] = images;
    console.log("rest of images", restOfImages);
    return (
      <>
        {/* banner section */}
        <StyleSingleRoomHero img={heroImg || defaultBgImg}>
          <Banner title={`${name} room`}>
            <Link to="/resort/rooms" className="btn btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyleSingleRoomHero>
        {/* room images  */}
        <section className="single-room">
          <div className="single-room-images">
            {restOfImages.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          {/* info section */}
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size: {size} sqft</h6>
              <h6>
                max capacity:{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>pets: {pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        {/* extra facilities */}
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((extra, index) => {
              return <li key={index}>-{extra}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}

export default SingleRoomPage;
