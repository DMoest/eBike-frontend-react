import React from 'react';
import { render } from '@testing-library/react';

import ChoosePayment from './ChoosePayment';

describe('ChoosePayment', () => {
  test('renders ChoosePayment component', () => {
    render(<ChoosePayment />);
  });
});
