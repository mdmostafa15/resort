// with higherOrder componets
import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import Loading from "./Loading";
import { withRoomConsumer } from "../context";

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
console.log("rooms containers",rooms);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomFilter sortedRooms={sortedRooms}/>
      <RoomList rooms={sortedRooms}/>
    </>
  );
}

export default withRoomConsumer(RoomsContainer);

// calling consumer without higher order component
/*import React from "react";
import { RoomConsumer } from "../context";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import Loading from "./Loading"
function RoomsContainer(props) {
  return (
    <RoomConsumer>
      {(value) => {
          console.log("RoomContainer: ",value);
          const {loading , sortedRooms, rooms} = value
          if (loading) {
              return<Loading />
          }
        return (
          <div>
            <RoomFilter rooms={rooms} />
            <RoomList sortedRooms={sortedRooms}/>
          </div>
        );
      }}
    </RoomConsumer>
  );
}

export default RoomsContainer;
*/
