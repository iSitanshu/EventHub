import React from 'react'
import Header from '../Header/Header'
import PopularEvents from '../PopularEvents/PopularEvents'
import NowShowing from '../NowShowing/NowShowing'
import Explore from '../Explore/Explore'
import Play from '../Play/Play'
import OtherEvent from '../OtherEvents/OtherEvents'
import Standup from '../Standup/Standup'

function MainPage() {
  return (
    <>
      <Header />
      <PopularEvents />
      <NowShowing />
      <Play />
      <Explore />
      <Standup />
      <OtherEvent />
    </>
  )
}

export default MainPage