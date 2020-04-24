import React from 'react';

function PrayerRequest({ prayerRequests, selectedPr }) {
    return (
      <>
        <h2>{prayerRequests[selectedPr].title}</h2>
        <p>{prayerRequests[selectedPr].request}</p>
      </>
    );
  }

export default PrayerRequest;