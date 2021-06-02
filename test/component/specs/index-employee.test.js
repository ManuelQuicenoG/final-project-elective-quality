import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import Index from '../../../pages/index'

test('the banner is visible and the buttons too', () => {
  render(<Index />);

  expect(screen.getByTestId("banner")).toBeInTheDocument();
  expect(screen.getByTestId("register")).toBeInTheDocument();
  expect(screen.getByTestId("listemployees")).toBeInTheDocument();
});

test('button register can be used ', () => {
  render(<Index />);

  expect(screen.getByTestId("register")).not.toHaveAttribute("disable");
});

test('button list can be used ', () => {
  render(<Index />);

  expect(screen.getByTestId("listemployees")).not.toHaveAttribute("disable")
});
