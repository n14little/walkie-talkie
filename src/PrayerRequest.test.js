import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PrayerRequest from './PrayerRequest';

const pr1 = { id: 'id1', title: 'My Kids Are Killing Me', request: 'Please pray that they would eat their food' };
const pr2 = { id: 'id2', title: 'First World Problem', request: 'I have run out of toilet paper' };
const pr3 = { id: 'id3', title: 'Fake News', request: 'I cannot trust a single news outlet' };
const prayerRequests = [pr1, pr2, pr3];


test('selected prayer request displayed', () => {
    const { getByText } = render(<PrayerRequest prayerRequests={prayerRequests} initialSelectedPr={pr1.id}/>);

    expect(getByText(pr1.title)).toBeInTheDocument();
    expect(getByText(pr1.request)).toBeInTheDocument();
});

test('goes to next prayer request', () => {
    const { getByText } = render(<PrayerRequest prayerRequests={prayerRequests} initialSelectedPr={pr1.id}/>);

    fireEvent.click(getByText('Next'));

    expect(getByText(pr2.title)).toBeInTheDocument();
    expect(getByText(pr2.request)).toBeInTheDocument();
});

test('goes to previous prayer request', () => {
    const { getByText } = render(<PrayerRequest prayerRequests={prayerRequests} initialSelectedPr={pr3.id}/>);

    fireEvent.click(getByText('Previous'));

    expect(getByText(pr2.title)).toBeInTheDocument();
    expect(getByText(pr2.request)).toBeInTheDocument();
});