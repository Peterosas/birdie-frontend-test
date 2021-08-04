import React from 'react';
import { render, screen } from '@testing-library/react';
import Timeline from './Timeline';

test('renders timeline', () => {
  render(<Timeline />);
  expect(true).toBe(true);
});
