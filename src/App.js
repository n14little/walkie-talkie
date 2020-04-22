import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [prayerRequests, setPrayerRequests] = useState([]);
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
        {prayerRequests.map((pr) => (
          <li key={pr.id}>
            <h3>{pr.title}</h3>
            <p>{pr.request}</p>
          </li>
        ))}
      </main>
    </div>
  );
}

export default App;
