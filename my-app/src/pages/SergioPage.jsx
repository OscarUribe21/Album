import { Link } from 'react-router-dom'
import sergio from '../img/sergio_ramos.jpg'
import '../App.css'

export default function SergioPage() {
  return (
    <div className="description-page">
      <div className="back-button">
        <Link to="/">← Volver</Link>
      </div>
      <h1>Sergio Ramos</h1>
      <img src={sergio} alt="Sergio Ramos" style={{ maxWidth: '300px' }} />
      <div className="description">
        <p><strong>Alias:</strong> El capitán</p>
        <p><strong>Posición:</strong> Defensa</p>
        <p><strong>Nacionalidad:</strong> España</p>
        <p><strong>Descripción:</strong> Sergio Ramos es un defensa central legendario conocido por su liderazgo, agresividad defensiva y capacidad de gol.</p>
        <p><strong>Carrera:</strong> Jugó principalmente para el Real Madrid (2005-2021) y actualmente para Sevilla.</p>
      </div>
    </div>
  )
}
