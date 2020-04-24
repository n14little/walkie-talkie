import React, { Suspense } from 'react';
import './App.css';
import PrayerRequests from './PrayerRequests';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Prayer Requests</h1>
      </header>
      <main>
        <Suspense fallback={<h1>Loading...</h1>}>
          <PrayerRequests/>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
