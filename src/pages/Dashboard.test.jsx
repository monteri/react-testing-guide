import { describe, test, expect } from 'vitest'
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";

import Dashboard from "./Dashboard";
import { createStore } from "../store/redux";

describe('Dashboard', () => {
  test("increment", () => {
    render(
      <Provider store={createStore()}>
        <Dashboard />
      </Provider>
    );

    const counter = screen.getByRole("counterinfo");
    expect(counter).toHaveTextContent("0");

    const addButton = screen.getByText(/increment/i);
    fireEvent.click(addButton);

    expect(counter).toHaveTextContent("1");
  });

  test("decrement", () => {
    render(
      <Provider store={createStore()}>
        <Dashboard />
      </Provider>
    );

    const counter = screen.getByRole("counterinfo");
    expect(counter).toHaveTextContent("0");

    const addButton = screen.getByText(/decrement/i);
    fireEvent.click(addButton);

    expect(counter).toHaveTextContent("-1");
  });
})
