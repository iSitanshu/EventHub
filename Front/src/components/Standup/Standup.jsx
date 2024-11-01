import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import "./Standup.css";

import {
    abhishek,  
    samay,
    madhur,
    swati,
    zakir,
    aashish,
    biswa,
    akshay,
} from '../../../public/Images/assets'; // Adjust the path according to your structure


const images = [
    { 
        src: abhishek, 
        title: 'Toxic', 
        comedian: 'Abhishek Upmanyu', 
        event: 'Standup Comedy', 
        venue: 'The Laugh Store', 
        price: '$1499 onwards',
        duration: '1 Hour',
        language: 'Hindi',
        description: 'Abhishek is celebrated for his sharp wit and engaging storytelling. His comedy often revolves around everyday situations, cultural observations, and the quirks of Indian life. With a knack for delivering punchlines that resonate with a wide audience, he seamlessly blends personal anecdotes with humor, making his performances relatable and entertaining.'
    },
    { 
        src: samay, 
        title: 'India Got Latent', 
        comedian: 'Samay Raina', 
        event: 'Comedy Show', 
        venue: 'The Laugh Store', 
        price: '$999 onwards',
        duration: '1 Hour',
        language: 'Hindi',
        description: 'A fresh face in the comedy circuit, Samay Raina has quickly gained popularity for his relatable and humorous take on the challenges faced by millennials. His performances often touch on themes of youth, relationships, and the pressures of modern life.'
    },
    { 
        src: madhur, 
        title: 'Madhur Virli Live', 
        comedian: 'Madhur Virli', 
        event: 'Standup Comedy', 
        venue: 'The Laugh Store', 
        price: '$399 onwards',
        duration: '1 Hour',
        language: 'Hindi',
        description: 'Madhur\'s comedy is characterized by its observational nature, drawing humor from the intricacies of family life and societal norms. His performances often highlight the absurdities of everyday interactions.'
    },
    { 
        src: swati, 
        title: 'Love is Love', 
        comedian: 'Swati Sachdeva', 
        event: 'Standup Comedy', 
        venue: 'The Laugh Store', 
        price: '$499 onwards',
        duration: '1 Hour',
        language: 'Hindi',
        description: 'Swati brings a unique voice to the stand-up scene, focusing on women\'s experiences and societal expectations. Her comedy is both empowering and humorous, tackling topics like gender roles and personal identity.'
    },
    { 
        src: zakir, 
        title: 'Haq Se Single', 
        comedian: 'Zakir Khan', 
        event: 'Standup Comedy', 
        venue: 'The Laugh Store', 
        price: '$399 onwards',
        duration: '1 Hour',
        language: 'Hindi',
        description: 'Zakir has become a household name in Indian comedy, known for his signature catchphrases and storytelling style. He draws from his own life experiences, making his humor both nostalgic and relevant.'
    },
    { 
        src: aashish, 
        title: 'Pretty Good Show', 
        comedian: 'Aashish Solanki', 
        event: 'Standup Comedy', 
        venue: 'The Laugh Store', 
        price: '$1499 onwards',
        duration: '1 Hour',
        language: 'Hindi',
        description: 'Aashish is known for his observational comedy that highlights the quirks of contemporary life. He explores themes like technology and relationships, delivering laughs through a relatable lens.'
    },
    { 
        src: biswa, 
        title: 'Biswa Mast Insaan', 
        comedian: 'Biswa Kalyan Rath', 
        event: 'Standup Comedy', 
        venue: 'The Laugh Store', 
        price: '$999 onwards',
        duration: '1 Hour',
        language: 'Hindi',
        description: 'Biswa gained fame as one of the first comedians to rise to prominence through online platforms. His comedy features clever wordplay and insightful commentary on a range of topics, including Indian and pop culture.'
    },
    { 
        src: akshay, 
        title: 'Akshay Srivastava', 
        comedian: 'Akshay Srivastava', 
        event: 'Standup Comedy', 
        venue: 'The Laugh Store', 
        price: '$399 onwards',
        duration: '1 Hour',
        language: 'Hindi',
        description: 'Not to be confused with the Bollywood superstar, this Akshay Kumar uses humor to explore contemporary issues, blending satire with personal anecdotes to highlight the absurdities of daily life.'
    }
];


const Standup = () => {
    const [index, setIndex] = useState(0);
    const totalSlides = images.length;
    const slidesToShow = 4;

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % slidesToShow);
        }, 8000);

        return () => clearInterval(interval);
    }, [totalSlides]);

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % slidesToShow);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + Math.ceil(totalSlides / slidesToShow)) % slidesToShow);
    };

    // const standuppage = () => {
        
    // }

    return (
        <div className="standup">
            <p><span>Standup</span> Comedian</p>
            <div className="slider">
                <div className="slides" style={{ transform: `translateX(${-index * 25}%)`, transition: 'transform 0.5s ease-in-out' }}>
                    {images.map((image, idx) => (
                        <NavLink 
                        to="/Stand-up"
                        className="slide" key={idx}
                        state={{image}}
                        >
                            <img src={image.src} alt={`Slide ${idx + 1}`} />
                            <div className="caption">
                                <p className="title"><strong>{image.title}</strong></p>
                                <p className="comedian"><strong>{image.comedian}</strong></p>
                                <p>{image.venue}</p>
                                <p>{image.event}</p>
                                <p>{image.price}</p>
                            </div>
                        </NavLink>
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
