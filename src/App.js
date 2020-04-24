import React, { useEffect, useState } from 'react';
import PrayerRequest from './PrayerRequest';
import './App.css';

function App() {
  const [prayerRequests, setPrayerRequests] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8000/prayer-requests');
      const prayers = await response.json();
      setPrayerRequests(prayers);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Prayer Requests</h1>
      </header>
      <main>
        {prayerRequests ? <PrayerRequest prayerRequests={prayerRequests} initialSelectedPr={prayerRequests[0].id}/> : <h1>Loading...</h1>}
      </main>
    </div>
  );
}

export default App;
