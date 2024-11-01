import React, { useContext } from 'react';
import "./Explore.css";
import {
  concert,
  food,
  meetup,
  football,
  guitar,
  cricket,
  car,
  festival,
} from '../../../public/Images/assets';
import UserContext from '../../context/UserContext';

const Explore = () => {
  const {updatelocation} = useContext(UserContext)

  const events = [
      { img: concert, title: "Concert" },
      { img: food, title: "Food & Drinks" },
      { img: meetup, title: "Meetup" },
      { img: football, title: "Sports" },
      { img: guitar, title: "Music" },
      { img: cricket, title: "IPL" },
      { img: car, title: "Car Shows" },
      { img: festival, title: "Festivals" },
  ];

  return (
    <div className="explore-main">
      <p><span>Explore Events</span> across {updatelocation}</p>
      <h2>(Comming Soon)</h2>
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
