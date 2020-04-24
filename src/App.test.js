import React from 'react';
import fetchMock from 'fetch-mock/es5/client';
import { render } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';

fetchMock.get('http://localhost:8000/prayer-requests', {
  status: 200,
  body: [
    {
      id: 1,
      title: 'The Struggle Is Real',
      request: 'My kids will eat their dinner',
    },
    {
      id: 2,
      title: 'A Real First-World Problem',
      request: 'The grocery store would receive a shipment of toilet paper',
    },
  ],
  headers: {
    'Content-Type': 'application/json',
  }
});

test('renders prayer requests header', async () => {
  let wrapper;
  act(() => {
    wrapper = render(<App />);
  });
  const { findByText } = wrapper;
  const prayerRequests = await findByText(/Prayer Requests/);
  expect(prayerRequests).toBeInTheDocument();
});

test('renders all prayer requests', async () => {
  let wrapper;
  act(() => {
    wrapper = render(<App />);
  });
  const { findByText } = wrapper;
  const theStruggle = await findByText('The Struggle Is Real');
  const theStruggleRequest = await findByText('My kids will eat their dinner');
  const firstWorldProb = await findByText('A Real First-World Problem');
  const firstWorldProbRequest = await findByText('The grocery store would receive a shipment of toilet paper');

  expect(theStruggle).toBeInTheDocument();
  expect(theStruggleRequest).toBeInTheDocument();
  expect(firstWorldProb).toBeInTheDocument();
  expect(firstWorldProbRequest).toBeInTheDocument();
});

test('renders button to start prayer walk mode', () => {

});
