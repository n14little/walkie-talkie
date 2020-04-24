import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PrayerRequests from './PrayerRequests';

const pr1 = 'id1';
const pr2 = 'id2';
const pr3 = 'id3';
const prayerRequests = {
    [pr1]: { title: 'My Kids Are Killing Me', request: 'Please pray that they would eat their food' },
    [pr2]: { title: 'First World Problem', request: 'I have run out of toilet paper' },
    [pr3]: { title: 'Fake News', request: 'I cannot trust a single news outlet' },
};


test('selected prayer request displayed', () => {
    const { getByText } = render(<PrayerRequests prayerRequests={prayerRequests} selectedPr={pr1}/>);

    expect(getByText(prayerRequests[pr1].title)).toBeInTheDocument();
    expect(getByText(prayerRequests[pr1].request)).toBeInTheDocument();
});

test.skip('goes to next prayer request', () => {
    const pr = { title: 'My Kids Are Killing Me', request: 'Please pray that they would eat their food' };
    const nextPr = { title: 'First World Problem', request: 'I have run out of toilet paper' };
    const { getByText } = render(<PrayerRequests pr={pr} nextPr={nextPr}/>);

    fireEvent.click(getByText('Next'));

    expect(getByText(nextPr.title)).toBeInTheDocument();
    expect(getByText(nextPr.request)).toBeInTheDocument();
});