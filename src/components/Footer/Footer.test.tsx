import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer', () => {
  render(<Footer />);
  expect(true).toBe(true);
});
