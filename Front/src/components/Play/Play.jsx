import React, { useEffect, useState } from 'react';
import { image2, image3, image4, image5, image6, image7 } from '../../../public/Images/assets';
import { Link, NavLink } from 'react-router-dom'

const images = [
    { 
        src: image2, 
        title: '12 Angry Women', 
        comedian: '5/5 Rating', 
        event: 'Inspirational', 
        venue: 'English',
        plot: "This play revolves around a jury's deliberations in a murder trial. As the jurors discuss the evidence, personal biases and emotions surface, leading to intense debates about justice and truth.",
        characters: "The play features twelve jurors, each representing different perspectives and backgrounds, which influence their views on the case.",
        themes: "Key themes include justice, prejudice, moral responsibility, and the dynamics of group decision-making.",
        significance: "It highlights the flaws in the judicial system and the importance of reasonable doubt, making it a powerful commentary on societal values."
    },
    { 
        src: image3, 
        title: 'Death of a Salesman', 
        comedian: '4.6/5 Rating', 
        event: 'Action/Sci-Fi', 
        venue: 'Hindi/English',
        plot: "The story follows Willy Loman, an aging salesman who struggles with the reality of his unfulfilled dreams and the pressures of societal expectations.",
        characters: "Key characters include Willy Loman, his wife Linda, and their sons Biff and Happy, each representing different facets of the American Dream.",
        themes: "Major themes include the American Dream, identity, family dynamics, and the conflict between reality and illusion.",
        significance: "This play critiques the pursuit of success and the impact of societal pressures on individual lives, making it a timeless classic."
    },
    { 
        src: image4, 
        title: 'Madhyam Vyayog', 
        comedian: '3.9/5 Rating', 
        event: 'Horror/Suspense', 
        venue: 'English',
        plot: "The play centers on the love story of King Dushyanta and Shakuntala, exploring their relationship and the challenges posed by misunderstandings and fate.",
        characters: "Key characters include King Dushyanta, Shakuntala, and Sage Kanva, each illustrating the complexities of love and duty.",
        themes: "Central themes include love, destiny, and the societal norms of the time.",
        significance: "As one of the earliest works in Indian theater, it showcases the rich tradition of Sanskrit drama and its exploration of human emotions."
    },
    { 
        src: image5, 
        title: 'Nirbhaya', 
        comedian: '4.8/5 Rating', 
        event: 'Suspense/Drama', 
        venue: 'Hindi',
        plot: "Inspired by the tragic 2012 Nirbhaya incident, the play portrays the realities of violence against women in India through personal narratives of survivors.",
        characters: "The cast includes real-life survivors who share their experiences, making the narrative poignant and impactful.",
        themes: "Major themes include gender-based violence, societal norms, and the resilience of women.",
        significance: "The play raises awareness about women's issues in a patriarchal society, sparking conversations and protests about gender violence."
    },
    { 
        src: image6, 
        title: 'Taj Mahal ke Tender', 
        comedian: '4.8/5 Rating', 
        event: 'Comedy/Drama', 
        venue: 'Hindi',
        plot: "This satirical play imagines Mughal Emperor Shah Jahan navigating modern bureaucratic processes while planning the Taj Mahal, highlighting the absurdities of governance.",
        characters: "Characters include Shah Jahan and various bureaucrats, each representing different aspects of the bureaucratic system.",
        themes: "Key themes include bureaucracy, power, and the clash between tradition and modernity.",
        significance: "The play critiques contemporary governance and resonates with audiences through its humor and historical context."
    },
    { 
        src: image7, 
        title: 'Tughlaq', 
        comedian: '3.8/5 Rating', 
        event: 'Drama/Motivational', 
        venue: 'Hindi',
        plot: "Set during the reign of Sultan Muhammad bin Tughlaq, the play explores his ambitious reforms and the ensuing chaos that results from his idealism.",
        characters: "Key characters include Tughlaq, his advisors, and common citizens, each showcasing different perspectives on power and governance.",
        themes: "Major themes include power, idealism, disillusionment, and the complexities of leadership.",
        significance: "The play is a critical examination of political power and human nature, making it a significant work in Indian theater that remains relevant today."
    },
];



const NowShowing = () => {
    const [index, setIndex] = useState(0);
    const totalSlides = images.length;
    const slidesToShow = 4;

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % slidesToShow);
        }, 10000);

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
            <p><span>Plays</span> and Theatre</p>
            <div className="slider">
                <div className="slides" style={{ transform: `translateX(${-index * 25}%)` }}>
                    {images.map((image, idx) => (
                        <NavLink
                        to="/play"
                        state={{image}}
                        className="slide" key={idx}>
                            <img src={image.src} alt={`Slide ${idx + 1}`} />
                            <div className="caption">
                                <p className="title"><strong>{image.title}</strong></p>
                                <p className="comedian"><strong>{image.comedian}</strong></p>
                                <p>{image.venue}</p>
                                <p>{image.event}</p>
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

export default NowShowing;
