import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';

test('renders prayer requests header', async () => {
  let wrapper;
  act(() => {
    wrapper = render(<App />);
  });
  const { findByText } = wrapper;
  const prayerRequests = await findByText(/Prayer Requests/);
  expect(prayerRequests).toBeInTheDocument();
});
