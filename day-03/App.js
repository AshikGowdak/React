import React from "react";
import ReactDOM from "react-dom/client";

// Functional Component
const Title = () => <h1>Hello, React! from react Element</h1>;

// Functional Component
const HeadingComponent = () => (
  <div id="container">
    {/* Component Composition */}
    <Title />
    <h1>Hello, React! from react functional Component</h1>;
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
