// with higherOrder componets
import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import Loading from "./Loading";
import { withRoomConsumer } from "../context";
/**
 * rooms page container
 * contain filer component and list component of room
 * @param {*} param0
 */
function RoomsContainer({ context }) {
  // destructured context value
  const { loading, sortedRooms, rooms } = context;
  console.log("rooms containers", rooms);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
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
