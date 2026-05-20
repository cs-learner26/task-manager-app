import { render } from "@testing-library/react";
import TaskCard from "./TaskCard";

test("renders task card", () => {
  const mockTask = {
    _id: "1",
    title: "Test Task",
    description: "Test Description",
    status: "pending",
    priority: "high",
    dueDate: "2026-05-20",
  };

  render(
    <TaskCard
      task={mockTask}
      deleteTask={() => {}}
      openEdit={() => {}}
      markCompleted={() => {}}
    />
  );
});