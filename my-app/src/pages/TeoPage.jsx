import { Link } from 'react-router-dom'
import '../App.css'
import teo from '../img/teo.jpg'

export default function TeoPage() {
  return (
    <div className="description-page">
      <div className="back-button">
        <Link to="/">← Volver</Link>
      </div>
      <h1>Teófilo Gutiérrez</h1>
      <img src={teo} alt="Teofilo Gutierres" style={{ maxWidth: '300px' }} />
      <div className="description">
        <p><strong>Alias:</strong> El perfume</p>
        <p><strong>Posición:</strong> Delantero</p>
        <p><strong>Nacionalidad:</strong> Colombia</p>
        <p><strong>Descripción:</strong> Teófilo Gutiérrez (El perfume) es un delantero colombiano reconocido por su gols y su experiencia en ligas europeas.</p>
        <p><strong>Carrera:</strong> Ha jugado en varios equipos europeos y en el fútbol colombiano.</p>
      </div>
    </div>
  )
}
