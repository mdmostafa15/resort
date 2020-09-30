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
  formateData(items) {
    let tempRooms = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempRooms;
  }
  render() {
    return (
      <RoomContext.Provider value={{...this.state}}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomContext, RoomConsumer };
