import React from 'react'
import Navbar from '../Navbar/Navbar'
import Navbarbelow from '../Navbarbelow/Navbarbelow';
import LiveMatch from '../Feature/LiveMatch';
import LatestNews from '../LatestNews/LatestNews';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
       <Navbar/>
    
    <Navbarbelow/>
    
    <LiveMatch/>
    <LatestNews/>
    {/* <Footer/> */}
    </div>
  )
}

export default Home
