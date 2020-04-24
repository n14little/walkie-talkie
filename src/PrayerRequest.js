import React, { useState } from 'react';

function PrayerRequest({ prayerRequests, initialSelectedPr }) {
  const [indexOfSelectedPr, setIndexOfSelectedPr] = useState(prayerRequests.findIndex((pr) => pr.id === initialSelectedPr));
  const selectedPrayerRequest= prayerRequests[indexOfSelectedPr]
  const onNext=() => setIndexOfSelectedPr(indexOfSelectedPr + 1)
  const onPrevious=() => setIndexOfSelectedPr(indexOfSelectedPr - 1)

  return (
    <>
      <h2>{selectedPrayerRequest.title}</h2>
      <p>{selectedPrayerRequest.request}</p>
      <button onClick={onNext}>Next</button>
      <button onClick={onPrevious}>Previous</button>
    </>
  );
}

export default PrayerRequest;