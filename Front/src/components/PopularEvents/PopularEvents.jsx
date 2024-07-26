import React from 'react'
import "./PopularEvents.css"

const PopularEvents = () => {
  return (
<>
<div className="popularevent">
    <p className='popularevent-heading'>
      <span>Popular Events</span> in New Delhi</p> 
    <div className='popularevent-button'>
        <button>Standup</button>
        <button>Movies</button>
        <button>Plays</button>
        <button>Other Events</button>
    </div>
</div>
</>
  )
}

export default PopularEvents