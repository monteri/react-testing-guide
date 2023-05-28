import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Navbar from "..";
import {renderWithRouter} from "../../../tests/helpers";

const links = [
  { href: '/test1', title: 'Test1' },
  { href: '/test2', title: 'Test2' },
]

describe('Navbar', () => {
  test('Navbar is rendered with all links', async () => {
    render(
      renderWithRouter(<Navbar links={links} />)
    )
    // render(
    //   <Navbar links={links} />
    // )
    screen.getAllByTestId('navbar-link').forEach(link => {
      expect(link.href).toBeTruthy();
    })
    links.forEach(link => {
      expect(screen.getByText(link.title)).toBeInTheDocument()
    })
  })
})