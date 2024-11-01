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
import { NavLink } from 'react-router-dom';

const Standup = () => {
    const images = [
        { 
            src: ice, 
            title: 'Ice Skating', 
            comedian: '4.8/5 Rating', 
            event: '12:00 PM to 10:00 PM', 
            venue: 'IkaTE, DLF, Gurgoan', 
            price: '$20',
            description: 'Enjoy a thrilling ice skating experience with family and friends. Glide across the ice in a beautifully designed rink, perfect for both beginners and experienced skaters. The atmosphere is vibrant, with music playing and lights twinkling, making it a perfect outing for all ages.',
            ageSuitability: 'All ages',
            contact: 'info@ikate.com',
            website: 'www.ikate.com',
            genre: 'Sports'
        },
        { 
            src: nehu, 
            title: 'Nehru Planetarium', 
            comedian: '4.1/5 Rating', 
            event: '10:00 AM to 2:00 PM', 
            venue: 'Lush Green campus', 
            price: '$15',
            description: 'Explore the wonders of the universe with interactive exhibits and shows at the Nehru Planetarium. Discover fascinating facts about space, participate in engaging workshops, and watch captivating documentaries that bring the cosmos to life. It’s an educational adventure that inspires curiosity about the universe.',
            ageSuitability: 'Recommended for ages 5 and up',
            contact: 'contact@nehruplanetarium.com',
            website: 'www.nehruplanetarium.com',
            genre: 'Educational'
        },
        { 
            src: rum, 
            title: 'Rumbo Circus', 
            comedian: '3.9/5 Rating', 
            event: '5:00 PM to 8:00 PM', 
            venue: 'Delhi', 
            price: '$25',
            description: 'A spectacular circus show featuring acrobats, clowns, and more. Experience the thrill of daring stunts and the joy of laughter as talented performers take the stage. The Rumbo Circus promises an unforgettable evening filled with excitement, colorful costumes, and breathtaking performances that will leave you on the edge of your seat.',
            ageSuitability: 'All ages',
            contact: 'info@rumbocircus.com',
            website: 'www.rumbocircus.com',
            genre: 'Entertainment'
        },
        { 
            src: van, 
            title: 'Van Gosh 360', 
            comedian: '4.3/5 Rating', 
            event: '8:00 AM to 3:00 PM', 
            venue: 'New Delhi', 
            price: '$30',
            description: 'An immersive art experience showcasing the works of Vincent Van Gogh. Step into a world of vibrant colors and swirling patterns as you walk through stunning projections of his masterpieces. This unique exhibit not only displays his artwork but also allows you to feel the emotions behind each piece, making it a must-see for art lovers and newcomers alike.',
            ageSuitability: 'All ages',
            contact: 'support@vangosh360.com',
            website: 'www.vangosh360.com',
            genre: 'Art'
        },
        { 
            src: tramp, 
            title: 'SkyJumper Trampoline Park', 
            comedian: '4.9/5 Rating', 
            event: '10:00 AM to 7:00 PM', 
            venue: 'Swarn Jayanti Park, New Delhi', 
            price: '$18',
            description: 'Jump into fun with a variety of trampolines and activities for everyone at SkyJumper Trampoline Park. Enjoy dodgeball, foam pits, and slam dunk zones while bouncing off the walls. It’s the perfect place for kids and adults to unleash their energy and have a blast in a safe environment.',
            ageSuitability: 'Recommended for ages 3 and up',
            contact: 'info@skyjumper.com',
            website: 'www.skyjumper.com',
            genre: 'Recreation'
        },
        { 
            src: wow, 
            title: 'Worlds of Wonder', 
            comedian: '4.2/5 Rating', 
            event: '10:00 AM to 6:00 PM', 
            venue: 'Sector-38A, Noida', 
            price: '$22',
            description: 'A thrilling amusement park with rides and attractions for all ages. From roller coasters to water slides, Worlds of Wonder offers a wide range of exhilarating experiences. Enjoy family-friendly rides, live entertainment, and delicious food options, making it a perfect destination for a day of fun and adventure.',
            ageSuitability: 'All ages',
            contact: 'info@worldsofwonder.com',
            website: 'www.worldsofwonder.com',
            genre: 'Amusement'
        },
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
                        <NavLink
                        to="/Other-Events"
                        state={{image}}
                        className="slide" key={idx}>
                            <img src={image.src} alt={`Slide ${idx + 1}`} />
                            <div className="caption">
                                <p className="title"><strong>{image.title}</strong></p>
                                <p className="comedian"><strong>{image.comedian}</strong></p>
                                <p>{image.venue}</p>
                                <p>{image.event}</p>
                                <p>{image.price}</p> {/* Ensure price is displayed */}
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
