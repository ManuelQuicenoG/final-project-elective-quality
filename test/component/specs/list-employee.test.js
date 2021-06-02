import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import List from '../../../pages/employee/list'

test('the list space is available and the buttons too', () => {
  render(<List />);

  expect(screen.getByTestId("listspace")).toBeInTheDocument();
  expect(screen.getByTestId("principalspace")).toBeInTheDocument();
  expect(screen.getByTestId("cancelbutton")).toBeInTheDocument();
});

test('button return can be used ', () => {
  render(<List />);

  expect(screen.getByTestId("cancelbutton")).not.toHaveAttribute("disable");
});

