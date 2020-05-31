import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Sanjana"), //second argument is not gonna be visible due to negative indexing in css check line 94 style.css
    React.createElement(Pet, {
      name: "Emo",
      animal: "Dog",
      breed: "lebra",
    }),
    React.createElement(Pet, {
      name: "Moana",
      animal: "Fish",
      breed: "Star-fish",
    }),
    React.createElement(Pet, {
      name: "Essa",
      animal: "Cat",
      breed: "Snowball",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
