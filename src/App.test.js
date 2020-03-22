import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency

import App from "./App";

describe("<App />", () => {
  it("renders without crashing", () => {
    expect(true).toBe(true);
  });
  // 2. write this test
  // it("matches snapshot", () => {
  //   const tree = renderer.create(<App />); // generates a DOM tree

  //   // snapshots are a JSON representation of the DOM tree
  //   console.log(tree.toJSON());
  //   expect(tree.toJSON()).toMatchSnapshot();
  // });

  // 2. Another way to write a snapshot test
  it("matches snapshot", () => {
    const { container } = render(<App />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    // console.log(container);
    expect(container).toMatchSnapshot();
  });
});
