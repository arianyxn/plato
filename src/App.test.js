import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('отображает заголовок "С возвращением в Plato!"', () => {
  render(<App />);
  const linkElement = screen.getByText(/С возвращением в Plato!/i);
  expect(linkElement).toBeInTheDocument();
});