import React from "react";

import { Text } from "./components";

export default function App() {
  return (
    <div className="App">
      <Text as="h1">Hello Polymorphic Components!</Text>
      <Text as="h2"> Let's master you!</Text>
      <Text as="a" href="https://google.com">
        Nothing will show span!
      </Text>
    </div>
  );
}
