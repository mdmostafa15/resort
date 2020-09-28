import Title from "./Title";
import React, { Component } from "react";
import { FaCoffee, FaHiking, FaShuttleVan } from "react-icons/fa";
import { GiBarbecue } from "react-icons/gi";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCoffee />,
        title: "free coffees",
        info:
          "loElit ut qui esse nisi magna nulla ipsum cillum. Labore non reprehenderit eu irure laborum. Consectetur anim quis minim esse fugiat labore ipsum.",
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info:
          "loElit ut qui esse nisi magna nulla ipsum cillum. Labore non reprehenderit eu irure laborum. Consectetur anim quis minim esse fugiat labore ipsum.",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle van",
        info:
          "loElit ut qui esse nisi magna nulla ipsum cillum. Labore non reprehenderit eu irure laborum. Consectetur anim quis minim esse fugiat labore ipsum.",
      },
      {
        icon: <GiBarbecue />,
        title: "awasome barbecue party",
        info:
          "loElit ut qui esse nisi magna nulla ipsum cillum. Labore non reprehenderit eu irure laborum. Consectetur anim quis minim esse fugiat labore ipsum.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;