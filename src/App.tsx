import React from "react";

import { Text } from "./components";

const customTag = ({ children }: { children: React.ReactText }) => {
  return (
    <em style={{ background: "teal", color: "white", fontSize: "24px" }}>
      {children}
    </em>
  );
};

export default function App() {
  return (
    <div className="App">
      <Text as="h1">Hello Polymorphic Components!</Text>
      <Text as="h2" color="teal" style={{ backgroundColor: "black" }}>
        {" "}
        Let's master you!
      </Text>
      <Text as="a" href="https://google.com">
        Nothing will show span!
      </Text>
      <br />
      <Text as={customTag}>This is a custom tag!</Text>
    </div>
  );
}
