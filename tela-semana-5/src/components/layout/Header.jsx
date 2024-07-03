import "./Header.css";
import Logo from "./logoserra.svg";
import React from "react";

export default function Header(props) {
  return (
    <div className="Header">
      <img className="logoSerra" src={Logo} alt="Logo Serra Jr." />
      <h2 className="headerTitle">{props.titulo}</h2>
      
    </div>
  );
}
