import { useState } from 'react'
import { Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import messijpg from './img/messi.jpg'
import neymarjpg from './img/neymar.jpg'
import cr7 from './img/cr7.jpg'
import sergio from './img/sergio_ramos.jpg'
import teo from './img/teo.jpg'
import bacca from './img/bacca.jpg'
import './App.css'

function App() {
  

  return (
    <>
    <h1 className='titulo'>Album panini chipiao</h1>
      <div>
        <div>
        </div>
        <Link to="/messi">
          <img src={messijpg} className="logo" alt="messi" />
        </Link>
       <Link to="/neymar">
          <img src={neymarjpg} className="logo" alt="neymar" />
        </Link>
        <Link to="/cr7">
          <img src={cr7} className="logo" alt="Cristiano Ronaldo" />
        </Link>
      </div>
      
      <div className="card">
         <Link to="/sergio">
          <img src={sergio} className="logo" alt="Sergio Ramos" />
        </Link>
       <Link to="/teo">
          <img src={teo} className="logo" alt="Teofilo Gutierres" />
        </Link>
        <Link to="/bacca">
          <img src={bacca} className="logo" alt="Carlos bacca" />
        </Link>
      </div>
      <p className="read-the-docs">
        Haz click en las imagenes para mas información de los jugadores
      </p>
    </>
  )
}

export default App
