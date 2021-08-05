import React from 'react';
import { render, screen } from '@testing-library/react';
import Timeline from './Timeline';

test('should render timeline without crashing', () => {
  render(<Timeline />);
  expect(true).toBe(true);
});
