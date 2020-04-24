import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import fetchMock from 'fetch-mock/es5/client';
import PrayerRequest from './PrayerRequest';

const pr1 = { id: 'id1', title: 'My Kids Are Killing Me', request: 'Please pray that they would eat their food' };
const pr2 = { id: 'id2', title: 'First World Problem', request: 'I have run out of toilet paper' };
const pr3 = { id: 'id3', title: 'Fake News', request: 'I cannot trust a single news outlet' };
const prayerRequests = [pr1, pr2, pr3];

fetchMock.get('http://localhost:8000/prayer-requests', {
  status: 200,
  body: prayerRequests,
  headers: {
    'Content-Type': 'application/json',
  }
});


test('defaults to first prayer request displayed', async () => {
    let wrapper;
    act(() => {
        wrapper = render(<PrayerRequest />);
    });
    const { findByText } = wrapper;

    expect(await findByText(pr1.title)).toBeInTheDocument();
    expect(await findByText(pr1.request)).toBeInTheDocument();
});

test('goes to next prayer request', async () => {
    let wrapper;
    act(() => {
        wrapper = render(<PrayerRequest />);
    });
    const { findByText } = wrapper;

    fireEvent.click(await findByText('Next'));

    expect(await findByText(pr2.title)).toBeInTheDocument();
    expect(await findByText(pr2.request)).toBeInTheDocument();
});

test('next goes back to beginning when on last prayer request', async () => {
    let wrapper;
    act(() => {
        wrapper = render(<PrayerRequest />);
    });
    const { findByText } = wrapper;

    // will address this when I have the need to open straight
    // up to a specific prayer request
    fireEvent.click(await findByText('Next'));
    fireEvent.click(await findByText('Next'));
    fireEvent.click(await findByText('Next'));

    expect(await findByText(pr1.title)).toBeInTheDocument();
    expect(await findByText(pr1.request)).toBeInTheDocument();
});

test('goes to previous prayer request', async () => {
    let wrapper;
    act(() => {
        wrapper = render(<PrayerRequest />);
    });
    const { findByText } = wrapper;

    // will address this when I have the need to open straight
    // up to a specific prayer request
    fireEvent.click(await findByText('Previous'));
    fireEvent.click(await findByText('Previous'));

    expect(await findByText(pr2.title)).toBeInTheDocument();
    expect(await findByText(pr2.request)).toBeInTheDocument();
});

test('previous goes to end when on first prayer request', async () => {
    let wrapper;
    act(() => {
        wrapper = render(<PrayerRequest />);
    });
    const { findByText } = wrapper;

    fireEvent.click(await findByText('Previous'));

    expect(await findByText(pr3.title)).toBeInTheDocument();
    expect(await findByText(pr3.request)).toBeInTheDocument();
});