import React from "react";
import logo from "../assets/red-camera-icon.png";
import "./header.css";

export class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={logo} alt="Moviee logo" />
        <h1>The Moviee</h1>
      </header>
    );
  }
}
