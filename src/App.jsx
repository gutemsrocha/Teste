import "./App.css";
import React from "react";

import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

export default function App(props) {
  return (
    <div className="container">
      <Header titulo="Equipe Serra Jr"></Header>
      <Main />
      <Footer titulo="COPYRIGHT Ⓒ 2024 - SERRA JUNIOR ENGENHARIA"></Footer>
    </div>
  );
}
