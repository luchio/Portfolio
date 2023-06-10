import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AboutMe } from '../pages/AboutMe'
import { Skills } from '../pages/Skills'
import { Experience } from '../pages/Experience'
import { Loader } from '../components/Loader'
import { Home } from '../pages/Home'
import { Navbar } from '../components/Navbar'
import { Particle } from '../components/Particle'
import { Lenguage } from '../components/Lenguage'

export const AppRouter = () => {

    const [loader, setLoader] = useState(true)

    useEffect(() => {
      const interval = setInterval(() => {
          
          setLoader(false)
      }, 3700);
    
      return () => {
        clearInterval(interval);
      }
    }, [loader])

    if(loader) return (
        <Loader/>
    )

  return (
   <>
   <Navbar/>
   <Lenguage/>
   <Particle/>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about-me' element={<AboutMe/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/projects' element={<Experience/>}></Route>
        <Route path='/*' element={<Navigate to='/'/>}></Route>
    </Routes>
   </>
  )
}
