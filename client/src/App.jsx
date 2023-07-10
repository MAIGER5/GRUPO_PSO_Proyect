import React from 'react'
import styles from './App.module.css'
import { Home } from './componenets/Home/Home'
import { Landin } from './componenets/Landin/Landin'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Dhs } from './componenets/Dhs/Dhs'
import { Sein } from './componenets/Sein/Sein'
import { Pso } from './componenets/Pso/Pso'
import { Juridica } from './componenets/Juridica/Juridica'
import { Abaut } from './componenets/Abaut/Abaut'
import { Navbar } from './componenets/Navbar/Navbar'
import { Contact } from './componenets/Contact/Contact'

function App() {

  return (
    <div className={styles.APP}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landin/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/dhs' element={<Dhs/>} />
          <Route path='/sein' element={<Sein/>} />
          <Route path='/pso' element={<Pso/>} />
          <Route path='/juridica' element={<Juridica/>} />
          <Route path='/abaut' element={<Abaut/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
