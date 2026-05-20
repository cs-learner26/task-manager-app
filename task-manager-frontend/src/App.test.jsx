import { render, screen } from "@testing-library/react";
import App from "./App";

// Mock all child components
jest.mock("./components/Header", () => () => <div>Header</div>);
jest.mock("./components/TaskList", () => () => <div>TaskList</div>);
jest.mock("./components/AddTaskForm", () => () => <div>AddTaskForm</div>);
jest.mock("./Filter", () => () => <div>Filter</div>);

// ✅ MOCK fetch (THIS FIXES YOUR ERROR)
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([])
  })
);

test("renders App without crashing", () => {
  render(<App />);
  expect(screen.getByText("Header")).toBeInTheDocument();
});