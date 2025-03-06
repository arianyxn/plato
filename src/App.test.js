import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('отображает заголовок "С возвращением в Plato!"', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /С возвращением в Plato!/i });
  expect(headingElement).toBeInTheDocument();
});