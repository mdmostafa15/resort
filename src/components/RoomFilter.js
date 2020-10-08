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
  // set 'all' as a type
  types = ["all", ...types];
  // get uniqe number of capacity
  let capacities = getUniqeVal(rooms, "capacity");
  // // set 'all' as a type
  // types = ["all", ...types];
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
            value={type}
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

        {/** guests type search */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            className="form-control"
            id="capacity"
            value={capacity}
            name="capacity"
            onChange={handleChange}
          >
            {capacities.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        {/** end guests type search */}

        {/** price filter search */}
        <div className="form-group">
          <label htmlFor="price">room price: {price}</label>
          <input
            type="range"
            className="form-control"
            id="price"
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handleChange}
          />
        </div>
        {/** end price filter search */}

        {/** size filter search */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              className="form-control"
              id="size"
              name="minSize"
              value={minSize}
              onChange={handleChange}
            />
            <input
              type="number"
              className="form-control"
              id="size"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
            />
          </div>
        </div>
        {/** end size filter search */}

        {/** extrs filter search */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              id="breakfast"
              name="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
          <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              id="pets"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
          <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/** end extras filter search */}
      </div>
    </section>
  );
}

export default RoomFilter;
