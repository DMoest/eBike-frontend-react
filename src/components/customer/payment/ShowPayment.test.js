import React from 'react';
import { render } from '@testing-library/react';

import ShowPayment from './ShowPayment';

describe('ShowPayment', () => {
  test('renders ShowPayment component', () => {
    render(<ShowPayment />);
  });
});
