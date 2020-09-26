import React, { Component } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from 'react-icons/fa';
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleNavbarTaggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <nav className="nav-center">
          <nav className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach Resort" />
            </Link>
            <button type="button" className='nav-btn'
                onClick={this.handleNavbarTaggle}>
                <FaAlignRight className='nav-icon'/>
            </button>
          </nav>
          <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
              <li><Link to='/' >Home</Link></li>
              <li><Link to='rooms'>Rooms</Link></li>
          </ul>
        </nav>
      </nav>
    );
  }
}

export default Navbar;
