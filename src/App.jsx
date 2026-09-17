import React from 'react'
import TopBar from './components/TopBar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './footer/footer';


const App = () => {
  return (
    <div>
        <TopBar/>
        <Header/>
        <Navbar/>
        <Home/>
        <Footer/>
    </div>
  )
}

export default App
