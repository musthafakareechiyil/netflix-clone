import React from 'react'
import axios from 'axios'
import './App.css'
import Navbar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'

function App() {
  return (
    <>
       
      <Navbar />
      <Banner />
      <RowPost />
    </>
  )
}

export default App
