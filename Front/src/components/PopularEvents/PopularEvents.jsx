import React, { useContext } from 'react'
import "./PopularEvents.css"
import UserContext from '../../context/UserContext'

const PopularEvents = () => {
  const {updatelocation} = useContext(UserContext)

  return (
<>
<div className="popularevent">
    <p className='popularevent-heading'>
      <span>Popular Events</span> in {updatelocation}</p> 
    <div className='popularevent-button'>
        <button>Movies</button>
        <button>Standup</button>
        <button>Plays</button>
        <button>Events</button>
        <button>Other Events</button>
    </div>
</div>
</>
  )
}

export default PopularEvents