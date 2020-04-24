import React, { useState } from 'react';

function PrayerRequest({ prayerRequests, initialSelectedPr }) {
  const [indexOfSelectedPr, setIndexOfSelectedPr] = useState(prayerRequests.findIndex((pr) => pr.id === initialSelectedPr));
  const selectedPrayerRequest= prayerRequests[indexOfSelectedPr]
  const onNext = () => {
    const nextIndex = indexOfSelectedPr === prayerRequests.length - 1 ? 0 : indexOfSelectedPr + 1;
    setIndexOfSelectedPr(nextIndex);
  };
  const onPrevious =() => {
    const nextIndex = indexOfSelectedPr === 0 ? prayerRequests.length - 1 : indexOfSelectedPr - 1;
    setIndexOfSelectedPr(nextIndex);
  };

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