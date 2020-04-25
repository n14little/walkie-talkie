import React, { useState, useEffect } from 'react';

function PrayerRequest({ initialSelectedPrId }) {
  const [prayerRequests, setPrayerRequests] = useState();
  const [indexOfSelectedPr, setIndexOfSelectedPr] = useState(initialSelectedPrId || 0);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8000/prayer-requests');
      const prayers = await response.json();
      setPrayerRequests(prayers);
    };
    fetchData();
  }, []);

  const selectedPrayerRequest = prayerRequests && prayerRequests[indexOfSelectedPr]
  const onNext = () => {
    const nextIndex = indexOfSelectedPr === prayerRequests.length - 1 ? 0 : indexOfSelectedPr + 1;
    setIndexOfSelectedPr(nextIndex);
  };
  const onPrevious =() => {
    const nextIndex = indexOfSelectedPr === 0 ? prayerRequests.length - 1 : indexOfSelectedPr - 1;
    setIndexOfSelectedPr(nextIndex);
  };

  return prayerRequests ? (
    <>
      <h2>{selectedPrayerRequest.title}</h2>
      <p>{selectedPrayerRequest.request}</p>
      <button onClick={onPrevious}>Previous</button>
      <button onClick={onNext}>Next</button>
    </>
  ) : null;
}

export default PrayerRequest;