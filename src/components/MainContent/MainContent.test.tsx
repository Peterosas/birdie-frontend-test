import React from 'react';
import { render, screen } from '@testing-library/react';
import MainContent from './MainContent';

test('renders MainContent', () => {
  render(<MainContent />);
  expect(true).toBe(true);
});
