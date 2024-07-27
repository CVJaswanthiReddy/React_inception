import React from "react";
import ReactDOM from "react-dom/client";

//JSX
const Heading = () => (
  <h1 id="title" key="h2">
    React
  </h1>
);

//component

const HeaderComponent = () => {
  return (
    <div>
      {console.log("hi")}
      <h1>React from functional component</h1>
      <h2>This is h2 tag</h2>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
