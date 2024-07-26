import React, { useEffect, useState } from 'react';
import "./Movies.css";

const NowShowing = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api-gate2.movieglu.com/filmsNowShowing/?n=8', {
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
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => setMovies(data.films))
    .catch(error => {
      console.error('Error:', error);
      setError('Failed to fetch movies. Please try again later.');
    });
  }, []);
  console.log(response)

  return (
    <div className="movie-carousel">
      <h2>Films Now Showing</h2>
      {error && <p className="error">{error}</p>}
      <div className="slider">
        {movies.map((movie, index) => (
          <div className="slide" key={index}>
            <img 
              src={movie.images?.[0]?.medium?.film_image || 'default_image.jpg'} 
              alt={movie.film_name || 'No title'} 
            />
            <div className="caption">
              <p className="title"><strong>{movie.film_name || 'Unknown Title'}</strong></p>
              <p>{movie.release_dates?.[0]?.release_date || 'TBD'}</p>
              <p>{movie.genres?.map(genre => genre.genre_name).join(', ') || 'Genre Unknown'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NowShowing;
