import React from 'react';
import "./Explore.css";

const Explore = () => {
  const events = [
    { img: "./src/assets/Images/concert.jpeg", title: "Concert" },
    { img: "./src/assets/Images/food.jpeg", title: "Food & Drinks" },
    { img: "./src/assets/Images/meetup.jpeg", title: "Meetup" },
    { img: "./src/assets/Images/football.jpeg", title: "Sports" },
    { img: "./src/assets/Images/guitar.jpeg", title: "Music" },
    { img: "./src/assets/Images/cricket.jpeg", title: "IPL" },
    { img: "./src/assets/Images/car.jpeg", title: "Car Shows" },
    { img: "./src/assets/Images/festival.jpeg", title: "Festivals" },
  ];

  return (
    <div className="explore-main">
      <p><span>Explore Events</span> across New Delhi</p>
      <div className="explore-list">
        {events.map((event, index) => (
          <div key={index} className="explore-item">
            <img src={event.img} alt={event.title} />
            <div className="explore-overlay">
              <p>{event.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
