import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import RegisterEmployee from '../../../pages/employee/register'

test('The register component shows the title, the name input field, the role dropdown, the genders radio butons, the courses checkboxes, the accept terms and conditions checkbox and the register button', () => {
  render(<RegisterEmployee />);

  expect(screen.getByRole('heading', { name: /Registro de empleados/i })).toBeInTheDocument()
  expect(screen.getByRole('textbox', { name: /Nombre del empleado */i })).toBeInTheDocument();
  expect(screen.getByTestId("generoText")).toBeInTheDocument();
  expect(screen.getByTestId("female")).toBeInTheDocument();
  expect(screen.getByTestId("male")).toBeInTheDocument();
  expect(screen.getByTestId("other")).toBeInTheDocument();
  expect(screen.getByRole('checkbox', { name: /Inducción/i })).toBeInTheDocument();
  expect(screen.getByRole('checkbox', { name: /Seguridad/i })).toBeInTheDocument();
  expect(screen.getByRole('checkbox', { name: /Normativa/i })).toBeInTheDocument();
  expect(screen.getByRole('checkbox', { name: /Valores institucionales/i })).toBeInTheDocument();
  expect(screen.getByRole('checkbox', { name: /Terminología/i })).toBeInTheDocument();
  expect(screen.getByRole('checkbox', { name: /acepto términos y condiciones/i })).toBeInTheDocument();
});

test('no one option must be selected in gender ', () => {
  render(<RegisterEmployee />);

  expect(screen.getByTestId("female")).not.toBeChecked();
  expect(screen.getByTestId("male")).not.toBeChecked();
  expect(screen.getByTestId("other")).not.toBeChecked();
});

test('When the user selects a gender, it should be checked', () => {
  render(<RegisterEmployee />);

  fireEvent.click(screen.getByTestId("male"))

  expect(screen.getByTestId("female")).not.toBeChecked();
  expect(screen.getByTestId("male")).toBeChecked();
  expect(screen.getByTestId("other")).not.toBeChecked();
});

test('The register button should be disabled by deffect', () => {
  render(<RegisterEmployee />);

  expect(screen.getByTestId("register-button")).toHaveAttribute("disabled")
});
