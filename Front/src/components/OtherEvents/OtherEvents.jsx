import React, { useEffect, useState } from 'react';
import "./OtherEvents.css";

const images = [
    { src: 'src/assets/Images/ice.jpeg', title: 'Ice Skating', comedian: '4.8/5 Rating', event: '12:00 PM to 10:00 PM', venue: 'IkaTE, DLF, Gurgoan'},
    { src: 'src/assets/Images/nehru.webp', title: 'Nehru Planetarium', comedian: '4.1/5 Rating', event: '10:00 AM to 2:00 PM', venue: 'Lush Green campus' },
    { src: 'src/assets/Images/rum.jpeg', title: 'Rumbo Circus', comedian: '3.9/5 Rating', event: '5:00 PM to 8:00 PM', venue: 'Delhi'},
    { src: 'src/assets/Images/van.jpeg', title: 'Van Gosh 360', comedian: '4.3/5 Rating', event: '8:00 AM to 3:00 PM', venue: 'New Delhi'},
    { src: 'src/assets/Images/tramp.jpeg', title: 'SkyJumper Trampoline Park', comedian: '4.9/5 Rating', event: '10:00 AM to 7:00 PM', venue: 'Swarn Jayanti Park, New Delhi'},
    { src: 'src/assets/Images/wow.jpeg', title: 'Worlds of Wonder', comedian: '4.2/5 Rating', event: '10:00 AM to 6:00 PM', venue: 'Sector-38A, Noida'},
];

const Standup = () => {
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
                                <p>{image.price}</p>
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
