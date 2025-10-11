import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
    test("renders initial todos", () => {
        render(<TodoList />);
        expect(screen.getByText("Learn React")).toBeInTheDocument();
        expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    });

    test("adds a new todo", () => {
        render(<TodoList />);
        const input = screen.getByTestId("todo-input");
        const button = screen.getByTestId("add-button");

        fireEvent.change(input, { target: { value: "New Todo" } });
        fireEvent.click(button);

        expect(screen.getByText("New Todo")).toBeInTheDocument();
    });

    test("toggles a todo", () => {
        render(<TodoList />);
        const todo = screen.getByText("Learn React");
        fireEvent.click(todo);
        expect(todo).toHaveStyle("text-decoration: line-through");
    });

    test("deletes a todo", () => {
        render(<TodoList />);
        const deleteBtn = screen.getByTestId("delete-1");
        fireEvent.click(deleteBtn);
        expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
    });
});
