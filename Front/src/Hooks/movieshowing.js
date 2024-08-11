import React, { useEffect, useState } from 'react';

function usemovieshowing() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('https://api-gate2.movieglu.com/filmsNowShowing/?n=12', {
            method: 'GET',
            headers: {
                'client': 'EVEN_2',
                'x-api-key': 'qR6yEljujv1h0FOYzPREl8XbN17UveQ47iVOy3r8',
                'authorization': 'Basic RVZFTl8yOlQ4QURCQTZ2YkdVZw==',
                'territory': 'IN',
                'api-version': 'v200',
                'geolocation': '28.6129;77.2286',
                'device-datetime': new Date().toISOString()
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log("Fetched data: ", data);
            setData(data.films || []); // Adjust based on your API response structure
        })
        .catch(error => console.error('Error:', error));
    }, []);
    
    return data;
}

export default usemovieshowing;
