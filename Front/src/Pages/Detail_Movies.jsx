import React from 'react';
import { useLocation } from 'react-router';

function Detail_Movies() {
    const location = useLocation();
    const { movie } = location.state || {};

    if (!movie) {
        console.error("No Movie Selected");
        return <div className="text-white text-center py-10">No movie selected. Please go back and select a movie.</div>;
    }

    console.log(movie);
    const imdbID = movie.imdb_id;
    const posterImage = movie.images?.poster?.[1]?.medium?.film_image || "fallback_image_url.jpg";
    const filmTrailer = movie.film_trailer ? (
        <a
            href={movie.film_trailer}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-300 transition-all underline"
        >
            Watch Trailer
        </a>
    ) : (
        <p className="text-gray-400">Trailer not available</p>
    );

    return (
        <div className="bg-black min-h-screen text-white py-10 px-5">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start justify-center p-6 shadow-lg rounded-lg bg-gray-900">
                {/* Movie Poster */}
                <img
                    src={posterImage}
                    alt={movie.film_name}
                    className="max-w-xs md:max-w-sm rounded-lg shadow-lg object-cover"
                />

                {/* Movie Details */}
                <div className="flex flex-col gap-6 md:w-2/3">
                    <h1 className="text-5xl font-bold text-center md:text-left">{movie.film_name}</h1>
                    <p className="text-lg text-gray-300">
                        <span className="font-semibold">Rating:</span> {movie.age_rating?.[0]?.rating || 'N/A'}
                    </p>

                    {/* IMDb Link */}
                    <a
                        href={`https://www.imdb.com/title/${imdbID}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-500 hover:text-yellow-300 transition-all underline text-lg"
                    >
                        View on IMDb
                    </a>

                    {/* Trailer */}
                    <div className="mt-4">
                        {filmTrailer}
                    </div>

                    {/* Movie Description */}
                    <div className="text-gray-400 text-base leading-relaxed">
                        <p className="font-semibold text-white mb-2">Description</p>
                        <p>{movie.synopsis_long || 'No description available.'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail_Movies;
