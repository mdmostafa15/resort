import React, { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";

const getUniqeVal = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);
  console.log("from RoomFilter: ", context);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    size,
    minSize,
    maxSize,
    breakfast,
    pets,
    value,
  } = context;

  // get uniqe value of type
  let types = getUniqeVal(rooms, "type");
  // set all as a type
  types = ["all", ...types];
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <div className="filter-form">
        {/** select type search */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            className="form-control"
            id="type"
            value={value}
            name="type"
            onChange={handleChange}
          >
            {types.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        {/** end select type search */}
      </div>
    </section>
  );
}

export default RoomFilter;
