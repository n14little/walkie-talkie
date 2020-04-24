
import React from 'react';

import {
    unstable_createResource,
} from 'react-cache';
const resource = unstable_createResource(() => {
    return new Promise((resolve) => {
        fetch("http://localhost:8000/prayer-requests")
        .then(res => res.json())
        .then(response => {
            resolve(response);
        });
    });
});

class PrayerRequests extends React.Component {
    render() {
        const prayerRequests = resource.read();
    
        return (
            <ul>
                {prayerRequests.map((pr) => (
                    <li key={pr.id}>
                        <h3>{pr.title}</h3>
                        <p>{pr.request}</p>
                    </li>
                ))}
            </ul>
        );
    }
}

export default PrayerRequests;