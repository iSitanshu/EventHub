import React, { useEffect, useState } from 'react';
import "./NowShowing.css";

const images = [
    { src: 'src/assets/Images/Deadpool.jpeg', title: 'Deadpool & Wolverine', comedian: '5/5 Rating', event: 'Action/Comedy', venue: 'Hindi/English'},
    { src: 'src/assets/Images/Kalki.jpeg', title: 'Kalki', comedian: '4.2/5 Rating', event: 'Action/Sci-Fi', venue: 'Hindi/English' },
    { src: 'src/assets/Images/Baddnews.jpeg', title: 'BadNews', comedian: '3/5 Rating', event: 'Comedy', venue: 'Hindi/English'},
    { src: 'src/assets/Images/Kill.jpeg', title: 'Kill', comedian: '4.7/5', event: 'Suspense/Drama', venue: 'Hindi/English'},
    { src: 'src/assets/Images/Stree.jpeg', title: 'Stree 2', comedian: '4.8/5 Rating', event: 'Horror/Comedy', venue: 'Hindi/English'},
    { src: 'src/assets/Images/Safira.jpeg', title: 'Sarfira', comedian: '3.8/5', event: 'Drama', venue: 'Hindi/English'},
    { src: 'src/assets/Images/Up.jpeg', title: 'The UP Files', comedian: '3.5/5 Rating', event: 'Drama/Politics', venue: 'Hindi/English'},
    { src: 'src/assets/Images/Deadpool.jpeg', title: 'Deadpool', comedian: '5/5 Rating', event: 'Action/Comedy', venue: 'Hindi/English'}
];

const NowShowing = () => {
    const [index, setIndex] = useState(0);
    const totalSlides = images.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [totalSlides]);

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className="standup">
            <p><span>Recommended</span> Movies</p>
            <div className="slider">
                <div className="slides" style={{ transform: `translateX(${-index * 25}%)` }}>
                    {images.map((image, idx) => (
                        <div className="slide" key={idx}>
                            <img src={image.src} alt={`Slide ${idx + 1}`} />
                            <div className="caption">
                                <p className="title"><strong>{image.title}</strong></p>
                                <p className="comedian"><strong>{image.comedian}</strong></p>
                                <p>{image.venue}</p>
                                <p>{image.event}</p>
                            </div>
                        </div>
                    ))}
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
