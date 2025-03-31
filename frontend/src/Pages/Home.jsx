import React from 'react'
import Header from '../Components/Header'
import ServiceMenu from '../Components/ServiceMenu'
import MakeupArtists from '../Components/MakeupArtists'
import Banner from '../Components/Banner'

const Home = () => {
  return (
    <div>
         <Header/>
         <ServiceMenu/>
         <MakeupArtists/>
         <Banner/>
    </div>
  )
}

export default Home