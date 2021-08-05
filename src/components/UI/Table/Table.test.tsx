import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';

test('renders table', () => {
  render(<Table />);
  expect(true).toBe(true);
});
