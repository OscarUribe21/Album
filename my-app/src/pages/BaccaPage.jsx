import { Link } from 'react-router-dom'
import bacca from '../img/bacca.jpg'
import '../App.css'

export default function BaccaPage() {
  return (
    <div className="description-page">
      <div className="back-button">
        <Link to="/">← Volver</Link>
      </div>
      <h1>Carlos Bacca</h1>
      <img src={bacca} alt="Carlos bacca" style={{ maxWidth: '300px' }} />
      <div className="description">
        <p><strong>Alias:</strong> El rey del juju</p>
        <p><strong>Posición:</strong> Delantero</p>
        <p><strong>Nacionalidad:</strong> Colombia</p>
        <p><strong>Descripción:</strong> Carlos Bacca es un delantero colombiano maxima estrella del juju.</p>
        <p><strong>Carrera:</strong> Ha jugado en clubes como Villarreal, Sevilla, Milan entre otros.</p>
      </div>
    </div>
  )
}
