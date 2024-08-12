import React, { useEffect, useState } from 'react';
import { image2, image3, image4, image5, image6, image7 } from '../../../public/Images/assets';


const images = [
    { src: image2, title: '12 Angry Women', comedian: '5/5 Rating', event: 'Inspirational', venue: 'English'},
    { src: image3, title: 'Death of Salesman', comedian: '4.6/5 Rating', event: 'Action/Sci-Fi', venue: 'Hindi/English' },
    { src: image4, title: 'Madhyam Vyayog', comedian: '3.9/5 Rating', event: 'Horror/Suspense', venue: 'English'},
    { src: image5, title: 'Nirbhaya', comedian: '4.8/5 Rating', event: 'Suspense/Drama', venue: 'Hindi'},
    { src: image6, title: 'Taj Mahal ke Tender', comedian: '4.8/5 Rating', event: 'Comedy/Drama', venue: 'Hindi'},
    { src: image7, title: 'Tughlaq', comedian: '3.8/5 Rating', event: 'Drama/Motivational', venue: 'Hindi'},
];

const NowShowing = () => {
    const [index, setIndex] = useState(0);
    const totalSlides = images.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 10000); // Change slide every 3 seconds

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
            <p><span>Plays</span> and Theatre</p>
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
