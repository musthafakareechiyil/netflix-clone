import React from 'react'
import './App.css'
import {action,comedy,documetery,horror,originals, romance, trending} from './urls'
import Navbar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'

function App() {
  return (
    <>
       
      <Navbar />
      <Banner />
      <RowPost url = {trending} title = "Trending" />
      <RowPost url = {action} title = 'Action' isSmall />
      <RowPost url = {comedy} title = "Comedy" />
      <RowPost url = {horror} title = 'Horror' isSmall />
      <RowPost url = {documetery} title = "Documentries" />
      <RowPost url = {romance} title = 'Romance' isSmall />


    </>
  )
}

export default App
