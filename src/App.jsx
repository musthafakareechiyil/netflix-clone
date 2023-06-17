import React from 'react'
import axios from 'axios'
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
      <RowPost url = {originals} title = "Netflix Originals" />
      <RowPost url = {action} title = 'Action' isSmall />
      <RowPost url = {trending} title = "Trending" />
      <RowPost url = {horror} title = 'Horror' isSmall />
      <RowPost url = {comedy} title = "Comedy" />
      <RowPost url = {romance} title = 'Romance' isSmall />
      <RowPost url = {documetery} title = "Documentries" />

    </>
  )
}

export default App
