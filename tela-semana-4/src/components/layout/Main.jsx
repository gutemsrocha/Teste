import "./Main.css";
import React from "react";

import Card from "./Card";

export default function Main(props) {
  return (
    <div className="mainContainer">
      <Card membro="Membro" num={1} nome="Nome" idade="Idade" curso="Curso" />
      <Card membro="Membro" num={2} nome="Nome" idade="Idade" curso="Curso" />
      <Card membro="Membro" num={3} nome="Nome" idade="Idade" curso="Curso" />
    </div>
  );
}
