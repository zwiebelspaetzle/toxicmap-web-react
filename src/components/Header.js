import React, {Component} from "react";
import logo from "../img/tm-logo.svg";

class Header extends Component {
  render() {
    return (
      <header>
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
          <div className="title">TOXIC MAP</div>
        </a>
        <h1>Superfund Sites: The Most Contaminated Places in America</h1>
      </header>
    );
  }
}

export default Header;
