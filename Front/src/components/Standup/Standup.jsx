import React, { useEffect, useState } from 'react';
import "./Standup.css";

const images = [
    { src: 'src/assets/Images/Abhishek.jpeg', title: 'Toxic', comedian: 'Abhishek Upmanyu', event: 'Standup Comedy', venue: 'The Laugh Store', price: '$1499 onwards' },
    { src: 'src/assets/Images/Samay.webp', title: 'India Got Latent', comedian: 'Samay Raina', event: 'Comedy Show', venue: 'The Laugh Store', price: '$999 onwards' },
    { src: 'src/assets/Images/Madhur.png', title: 'Madhur Virli Live', comedian: 'Madhur Virli', event: 'Standup Comedy', venue: 'The Laugh Store', price: '$399 onwards' },
    { src: 'src/assets/Images/Swati.jpeg', title: 'Love is Love', comedian: 'Swati Sachdeva', event: 'Standup Comedy', venue: 'The Laugh Store', price: '$499 onwards' },
    { src: 'src/assets/Images/z.jpeg', title: 'Haq Se Single', comedian: 'Zakir Khan', event: 'Standup Comedy', venue: 'The Laugh Store', price: '$399 onwards' },
    { src: 'src/assets/Images/Aashish.webp', title: 'Pretty Good Show', comedian: 'Aashish Solanki', event: 'Standup Comedy', venue: 'The Laugh Store', price: '$1499 onwards' },
    { src: 'src/assets/Images/Biswa.jpeg', title: 'Biswa Mast Insaan', comedian: 'Biswa Kalyan Rath', event: 'Standup Comedy', venue: 'The Laugh Store', price: '$999 onwards' },
    { src: 'src/assets/Images/Akshay.jpeg', title: 'Akshay Srivastava', comedian: 'Akshay Srivastava', event: 'Standup Comedy', venue: 'The Laugh Store', price: '$399 onwards' }
];

const Standup = () => {
    const [index, setIndex] = useState(0);
    const totalSlides = images.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 5000); // Change slide every 3 seconds

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
            <p><span>Standup</span> Comedian</p>
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
