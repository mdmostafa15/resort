import React, { Component, createContext } from "react";
import Items from "./data";

const RoomContext = createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    featuredRooms: [],
    storedRooms: [],
    loading: true,
  };

  //get data
  componentDidMount() {
    let rooms = this.formateData(Items);
    let featuredRooms = rooms.filter((room) => room.featured === true);

    this.setState({
      rooms,
      featuredRooms,
      storedRooms: rooms,
      loading: false,
    });
  }
  // formating data from data.js
  formateData(items) {
    let tempRooms = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let room = { ...item.fields, images, id };
      console.log("context room: ", room);
      return room;
    });
    return tempRooms;
  }
  // get a specific room
  getRoom=(slug)=> {
    let tempRoom = [...this.state.rooms];
    const singleRoom = tempRoom.find((room) => room.slug === slug);
    return singleRoom;
  }
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getSingleRoom: this.getRoom,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomContext, RoomConsumer };
