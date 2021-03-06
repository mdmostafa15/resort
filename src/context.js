import React, { Component, createContext } from "react";
import Items from "./data";

const RoomContext = createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    featuredRooms: [],
    sortedRooms: [],
    loading: true,
    //filter default value
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    size: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  //get data
  componentDidMount() {
    let rooms = this.formateData(Items);
    let featuredRooms = rooms.filter((room) => room.featured === true);

    // set value for filter
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));

    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      // filter value initialize
      price: maxPrice,
      maxPrice,
      maxSize,
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
  getRoom = (slug) => {
    let tempRoom = [...this.state.rooms];
    const singleRoom = tempRoom.find((room) => room.slug === slug);
    return singleRoom;
  };

  // event hendle function of filter forms
  handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    console.log("from handlechange: ", name, value);
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };

  filterRooms = () => {
    // console.log("hello from filterRooms!");
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;

    // all rooms
    let tempRoom = [...rooms];
    // value transform
    capacity = parseInt(capacity);
    price = parseInt(price);

    // filter by type
    if (type !== "all") {
      tempRoom = tempRoom.filter((item) => item.type === type);
    }

    // filter by capacity
    if (capacity !== 1) {
      tempRoom = tempRoom.filter((item) => item.capacity >= capacity);
    }

    // filter by price
    tempRoom = tempRoom.filter((item) => item.price <= price);

    // filter by size
    tempRoom = tempRoom.filter(
      (item) => item.size >= minSize && item.size <= maxSize
    );

    // filter by extras
    if (breakfast) {
      tempRoom = tempRoom.filter((item) => item.breakfast === true);
    }
    if (pets) {
      tempRoom = tempRoom.filter((item) => item.pets === true);
    }

    // update state
    this.setState({
      sortedRooms: tempRoom,
    });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getSingleRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
//consumer
const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomContext, RoomConsumer };
