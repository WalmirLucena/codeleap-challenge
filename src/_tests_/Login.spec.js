import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { create } from "react-test-renderer";
import Login from "../pages/login";
import store from "../store/index"

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const tree = create(
    <Provider store={store}>
      <Router>
        <Login />
      </Router>
    </Provider>);
    expect(tree).toMatchSnapshot();
  });
});