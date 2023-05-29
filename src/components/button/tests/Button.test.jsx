import { vi } from 'vitest';
import { describe, test, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import Button from "..";

describe('Button', () => {
  test('button is rendered with title', async () => {
    render(<Button title="Test" />)
    expect(screen.getByText('Test')).toMatchSnapshot()
  })

  test('button is rendered with title', async () => {
    render(<Button title="Test" />)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  test('button is clicked', async () => {
    const onClick = vi.fn();
    render(<Button title="Test" onClick={onClick} />)

    // fireEvent.click(screen.getByRole('button'));
    await userEvent.click(screen.getByRole('button'));

    expect(onClick).toHaveBeenCalledOnce();
  })
})
