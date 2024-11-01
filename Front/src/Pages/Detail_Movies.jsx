import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

function Detail_Movies() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    
    const location = useLocation();
    const { movie } = location.state || {};

    if (!movie) {
        console.error("No Movie Selected");
        return <div className="text-white text-center py-10">No movie selected. Please go back and select a movie.</div>;
    }

    const posterImage = movie.images?.poster?.[1]?.medium?.film_image || "fallback_image_url.jpg";
    const filmTrailer = movie.film_trailer ? (
        <a
            href={movie.film_trailer}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-300 transition-all underline"
        >
            Watch Trailer
        </a>
    ) : (
        <p className="text-gray-400">Trailer not available</p>
    );

    const imdbID = movie.imdb_title_id;
    const apikey = "692e9ea3";

    // Example: Using OMDB API to fetch movie details
    const fetchMovieDetails = async () => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${apikey}`);
            if (!response.ok) {
                throw new Error("Failed to fetch movie data");
            }
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err.message);
            console.error("Error:", err);
        }
    };

    useEffect(() => {
        if (imdbID) {
            fetchMovieDetails();
        }
    }, [imdbID]);

    return (
        <div className="bg-black flex min-h-screen text-white py-32 px-auto">
            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-12 p-6 shadow-lg rounded-lg">
                
                {/* Movie Poster Section */}
                <div className="w-full md:w-1/3">
                    <img
                        src={posterImage}
                        alt={movie.film_name}
                        className="w-full rounded-lg shadow-lg object-cover"
                    />
                </div>

                {/* Movie Details Section */}
                <div className="flex flex-col gap-6 w-full md:w-1/2">
                    <h1 className="text-5xl font-bold text-center md:text-left text-green-500">{movie.film_name}</h1>
                    
                    <p className="text-lg text-gray-300">
                        <span className="font-semibold">Rating:</span> {movie.age_rating?.[0]?.rating || 'N/A'}
                    </p>

                    {/* IMDb Link */}
                    <a
                        href={`https://www.imdb.com/title/${imdbID}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-500 hover:text-green-300 transition-all underline text-lg"
                    >
                        View on IMDb
                    </a>

                    {/* Trailer Section */}
                    <div className="mt-4">
                        {filmTrailer}
                    </div>

                    {/* Movie Description Section */}
                    <div className="text-gray-400 text-base leading-relaxed">
                        <p className="font-semibold text-white mb-2">Description</p>
                        <p>{movie.synopsis_long || 'No description available.'}</p>
                    </div>

                    {/* Additional Movie Data from API */}
                    {data && (
                        <div className="mt-4 text-gray-300">
                            <p>
                                <strong>Genre:</strong> {data.Genre}
                            </p>
                            <p>
                                <strong>Director:</strong> {data.Director}
                            </p>
                            <p>
                                <strong>Actors:</strong> {data.Actors}
                            </p>
                        </div>
                    )}

                    {/* Error Handling */}
                    {error && <p className="text-red-500 mt-4">Error: {error}</p>}
                </div>
            </div>
        </div>
    );
}

export default Detail_Movies;
