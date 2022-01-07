import React from 'react';
import { render } from '@testing-library/react';

import Login from './Login';

describe('Login', () => {
  test('renders Login component', () => {
    render(<Login />);
  });
});
