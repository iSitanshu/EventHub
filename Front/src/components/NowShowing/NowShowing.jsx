import React, { useEffect, useState } from 'react';
import "./NowShowing.css";
import usemovieshowing from '../../Hooks/movieshowing';

const NowShowing = () => {
    const [index, setIndex] = useState(0);
    const moviedata = usemovieshowing();
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const totalSlides = moviedata.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 5000);

        return () => clearInterval(interval);
    }, [totalSlides]);

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    if (!totalSlides) {
        return <p>Loading...</p>;
    }

    return (
        <div className="standup">
            <p><span>Recommended</span> Movies</p>
            <div className="slider">
                <div className="slides" style={{ transform: `translateX(${-index * 25}%)` }}>
                    {moviedata.map((movie, idx) => {
                        const poster = movie.images.poster && movie.images.poster["1"];
                        const posterImage = poster ? poster.medium.film_image : "fallback_image_url.jpg"; // Fallback image
                        return (
                            <div className="slide" key={idx}>
                                {poster && (
                                    <img
                                        src={posterImage}
                                        alt={movie.film_name}
                                    />
                                )}
                                <div className="caption">
                                    <p className="title"><strong>{movie.film_name}</strong></p>
                                    <p className="comedian"><span>Rating : </span><strong>{movie.age_rating[0]?.rating || "N/A"}</strong></p>
                                    {/* <p>{movie.synopsis_long || "Description not available."}</p> */}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="navigation">
                    <button className="button arrow-left" onClick={prevSlide}>❮</button>
                    <button className="button arrow-right" onClick={nextSlide}>❯</button>
                </div>
            </div>
        </div>
    );
}

export default NowShowing;
