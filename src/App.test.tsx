import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Nested list text", () => {
  render(<App />);
  const nestedList = screen.getByText(/Nested List/);
  expect(nestedList).toBeInTheDocument();
});
