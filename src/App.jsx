import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import DailyUser from './components/DailyUser'
import Discover from './components/Discover'
import Features from './components/Features'
import Explore from './components/Explore'
import Immerse from './components/Immerse'
import Security from './components/Security'
import Stories from './components/Stories'
import Insights from './components/Insights'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Hero></Hero>
    <DailyUser></DailyUser>
    <Discover></Discover>
    <Features></Features>
    <Explore></Explore>
    <Immerse></Immerse>
    <Security></Security>
    <Stories></Stories>
    <Insights></Insights>
    <Footer></Footer>
    </>
  )
}

export default App
