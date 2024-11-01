import React, { useEffect, useState } from 'react'; // Import useState and useEffect
import {
    ice,
    nehu,
    rum,
    van,
    tramp,
    wow,
} from '../../../public/Images/assets'; // Adjust the path according to your structure
import './OtherEvents.css'

const Standup = () => {
    const images = [
        { src: ice, title: 'Ice Skating', comedian: '4.8/5 Rating', event: '12:00 PM to 10:00 PM', venue: 'IkaTE, DLF, Gurgoan', price: '$20' },
        { src: nehu, title: 'Nehru Planetarium', comedian: '4.1/5 Rating', event: '10:00 AM to 2:00 PM', venue: 'Lush Green campus', price: '$15' },
        { src: rum, title: 'Rumbo Circus', comedian: '3.9/5 Rating', event: '5:00 PM to 8:00 PM', venue: 'Delhi', price: '$25' },
        { src: van, title: 'Van Gosh 360', comedian: '4.3/5 Rating', event: '8:00 AM to 3:00 PM', venue: 'New Delhi', price: '$30' },
        { src: tramp, title: 'SkyJumper Trampoline Park', comedian: '4.9/5 Rating', event: '10:00 AM to 7:00 PM', venue: 'Swarn Jayanti Park, New Delhi', price: '$18' },
        { src: wow, title: 'Worlds of Wonder', comedian: '4.2/5 Rating', event: '10:00 AM to 6:00 PM', venue: 'Sector-38A, Noida', price: '$22' },
    ];

    const [index, setIndex] = useState(0);
    const totalSlides = images.length;

    const slidesToShow = 4; // Number of slides to show at once

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % slidesToShow);
        }, 12000);

        return () => clearInterval(interval);
    }, [totalSlides]);

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % slidesToShow);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + Math.ceil(totalSlides / slidesToShow)) % slidesToShow);
    };

    return (
        <div className="standup">
            <p><span>Other</span> Events</p>
            <div className="slider">
                <div className="slides" style={{ transform: `translateX(${-index * 25}%)`, transition: 'transform 0.5s ease-in-out' }}>
                    {images.map((image, idx) => (
                        <div className="slide" key={idx}>
                            <img src={image.src} alt={`Slide ${idx + 1}`} />
                            <div className="caption">
                                <p className="title"><strong>{image.title}</strong></p>
                                <p className="comedian"><strong>{image.comedian}</strong></p>
                                <p>{image.venue}</p>
                                <p>{image.event}</p>
                                <p>{image.price}</p> {/* Ensure price is displayed */}
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

export default Standup;
