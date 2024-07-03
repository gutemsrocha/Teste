import "./Card.css";
import React from "react";

export default function Card(props) {
  const { membro, num, nome, idade, curso } = props;
  return (
    <div className="cardContainer">
      <div className="subCardContainer">
        <div className="membro">
          {membro} {num}
        </div>
        <h3>{nome}</h3>
        <h3>{idade}</h3>
        <h3>{curso}</h3>
      </div>
    </div>
  );
}
