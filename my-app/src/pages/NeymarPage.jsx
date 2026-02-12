import { Link } from 'react-router-dom'
import neymar from '../img/neymar.jpg'
import '../App.css'

export default function NeymarPage() {
  return (
    <div className="description-page">
      <div className="back-button">
        <Link to="/">← Volver</Link>
      </div>
      <h1>Neymar Jr</h1>
      <img src={neymar} alt="Neymar" style={{ maxWidth: '300px' }} />
      <div className="description">
        <p><strong>Alias:</strong> El principe del futbol</p>
        <p><strong>Posición:</strong> Delantero</p>
        <p><strong>Nacionalidad:</strong> Brasil</p>
        <p><strong>Descripción:</strong> Neymar es un delantero brasileño conocido por su habilidad, velocidad y creatividad en el campo. alias el joga bonito</p>
        <p><strong>Carrera:</strong> Ha jugado para Santos, FC Barcelona, Paris Saint-Germain y Al-Hilal, entre otros.</p>
      </div>
    </div>
  )
}
