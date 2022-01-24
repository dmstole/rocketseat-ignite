import React from "react";
import { render } from "react-dom";
import { App } from "./App";

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start();
}

render(<App />, document.getElementById("root"));
