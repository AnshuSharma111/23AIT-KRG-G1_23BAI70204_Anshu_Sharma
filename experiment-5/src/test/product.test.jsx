import App from "../App";
import { render, screen } from "@testing-library/react";

test("matches snapshot", () => {
  const {container} = render(<App/>);
  expect(container).toMatchSnapshot();
});