import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import EventListing from './pages/EventListing'
import Admin from './pages/Admin'
import Booking from './pages/Booking'
import BookedShows from './pages/BookedShows'
import Profile from './pages/Profile'
import UpcomingEvents from './pages/UpcomingEvents'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/events' element={<EventListing/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/booking/:id' element={<Booking/>}/>
      <Route path='/bookedshows' element={<BookedShows/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/upcoming' element={<UpcomingEvents/>}/>
    </Routes>
    
    </>
  )
}

export default App