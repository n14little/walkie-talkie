import React, { useState, useEffect } from 'react';

// not all browsers support this
const synth = window.speechSynthesis;
const voices = synth.getVoices();
const americanEnglish = voices[27];

function speakPrayerRequest(pr) {
  const utterThis = new SpeechSynthesisUtterance(pr.title + pr.request);
  utterThis.voice = americanEnglish;
  synth.speak(utterThis);
}

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

  const playClicked = () => speakPrayerRequest(selectedPrayerRequest);
  return prayerRequests ? (
    <>
      <h2>{selectedPrayerRequest.title}</h2>
      <p>{selectedPrayerRequest.request}</p>
      <button onClick={playClicked}>Play</button>
      <button onClick={onPrevious}>Previous</button>
      <button onClick={onNext}>Next</button>
    </>
  ) : null;
}

export default PrayerRequest;