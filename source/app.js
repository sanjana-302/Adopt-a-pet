import React from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SeachParams";
const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Sanjana"), //second argument is not gonna be visible due to negative indexing in css check line 94 style.css
  //   React.createElement(Pet, {
  //     name: "Emo",
  //     animal: "Dog",
  //     breed: "lebra",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Moana",
  //     animal: "Fish",
  //     breed: "Star-fish",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Essa",
  //     animal: "Cat",
  //     breed: "Snowball",
  //   }),
  // ]);
  return (
    // <div>
    //   <h1 id="something-important">Adopt Me!</h1>
    //   <Pet name="Emo" animal="Dog" breed="Lebra" />
    //   <Pet name="Moana" animal="Fish" breed="Star-fish" />
    //   <Pet name="Essa" animal="Cat" breed="Snow-ball" />
    // </div>
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
