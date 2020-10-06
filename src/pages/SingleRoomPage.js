import React, { Component } from "react";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import defaultBgImg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import StyleSingleRoomHero from "../components/StyleSingleRoomHero";

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
          <h3>No Such Room is Fund...</h3>
          <Link to="/resort/rooms" className="btn btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    // destructure room
    const {
      name,
      slug,
      type,
      price,
      size,
      capacity,
      pets,
      breakfast,
      featured,
      description,
      extras,
      images,
    } = room;
    return (
      <div>
        <StyleSingleRoomHero img={images[0] || defaultBgImg}>
          <Banner title={`${name} room`}>
            <Link to="/resort/rooms" className="btn btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyleSingleRoomHero>
      </div>
    );
  }
}

export default SingleRoomPage;
