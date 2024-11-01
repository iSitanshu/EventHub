import React, { useEffect, useState } from 'react';
import "./NowShowing.css";
import usemovieshowing from '../../Hooks/movieshowing';
import { Link, NavLink } from 'react-router-dom';

const NowShowing = () => {
    const [index, setIndex] = useState(0);
    const moviedata = usemovieshowing();
    const totalSlides = moviedata.length;
    console.log("Movie data length = ",totalSlides);
    const slidesToShow = 4; // Number of slides to show at once

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % slidesToShow);
        }, 5000);

        return () => clearInterval(interval);
    }, [totalSlides]);

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % slidesToShow);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + Math.ceil(totalSlides / slidesToShow)) % slidesToShow);
    };

    if (!totalSlides) {
        return <p>Loading...</p>;
    }

    return (
        <div className="standup">
            <p><span>Recommended</span> Movies</p>
            <div className="slider">
                <div className="slides" style={{ transform: `translateX(${-index * (100 / slidesToShow)}%)` }}>
                    {moviedata.map((movie, idx) => {
                        const poster = movie.images.poster && movie.images.poster["1"];
                        const posterImage = poster ? poster.medium.film_image : "fallback_image_url.jpg"; // Fallback image
                        return (
                            <NavLink 
                            to="/Movies" 
                            state={{movie}}
                            className="slide" key={idx} style={{ width: `${100 / slidesToShow}%` }}>
                                {poster && (
                                    <img
                                        src={posterImage}
                                        alt={movie.film_name}
                                    />
                                )}
                                <div className="caption">
                                    <p className="title"><strong>{movie.film_name}</strong></p>
                                    <p className="comedian"><span>Rating : </span><strong>{movie.age_rating[0]?.rating || "N/A"}</strong></p>
                                </div>
                            </NavLink>
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
