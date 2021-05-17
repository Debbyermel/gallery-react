import { render } from "@testing-library/react";
import React from "react";
import App from "./App";

test("renders a h2", () => {
  const { getByText } = render(<App />);
  const h2 = getByText(/Hello from testing/);
  expect(h2).toHaveTextContent("Hello from testing");
});