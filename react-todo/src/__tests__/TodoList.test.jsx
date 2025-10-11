// src/__tests__/TodoList.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
    test("renders initial todos", () => {
        render(<TodoList />);
        expect(screen.getByText("Learn React")).toBeInTheDocument();
        expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    });

    test("adds a new todo", () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText("Add a new todo");
        const button = screen.getByText("Add");

        fireEvent.change(input, { target: { value: "Test Todo" } });
        fireEvent.click(button);

        expect(screen.getByText("Test Todo")).toBeInTheDocument();
    });

    test("toggles todo completion", () => {
        render(<TodoList />);
        const todoItem = screen.getByText("Learn React");

        // initially not completed
        expect(todoItem).not.toHaveStyle("text-decoration: line-through");

        fireEvent.click(todoItem);

        expect(todoItem).toHaveStyle("text-decoration: line-through");
    });

    test("deletes a todo", () => {
        render(<TodoList />);
        const deleteButton = screen.getAllByText("Delete")[0];

        fireEvent.click(deleteButton);

        expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
    });
});
