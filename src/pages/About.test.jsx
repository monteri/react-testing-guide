import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent } from "@testing-library/react";
import About from "./About";
import useCountStore from "../store/zustand";

describe('About', () => {
  const originalState = useCountStore.getState();
  beforeEach(() => {
    useCountStore.setState(originalState);
  });

  test("add one", () => {
    render(<About />);

    const counter = screen.getByRole("counterinfo");
    expect(counter).toHaveTextContent("0");

    const addButton = screen.getByText(/increment/i);
    fireEvent.click(addButton);

    expect(counter).toHaveTextContent("1");
  });

  test("subtract one again", () => {
    render(<About />);

    const counter = screen.getByRole("counterinfo");
    expect(counter).toHaveTextContent("0");

    const addButton = screen.getByText(/decrement/i);
    fireEvent.click(addButton);

    expect(counter).toHaveTextContent("-1");
  });
})
