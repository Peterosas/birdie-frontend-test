import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonGroup from './ButtonGroup';

test('renders ButtonGroup', () => {
  render(<ButtonGroup />);
  expect(true).toBe(true);
});
