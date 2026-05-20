import { render, screen } from "@testing-library/react";
import TaskButton from "./TaskButton";

test("renders button", () => {
  render(<TaskButton />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});