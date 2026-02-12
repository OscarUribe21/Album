import { Link } from 'react-router-dom'
import messi from '../img/messi.jpg'
import '../App.css'

export default function MessiPage() {
  return (
    <div className="description-page">
      <div className="back-button">
        <Link to="/">← Volver</Link>
      </div>
      <h1>Lionel Messi</h1>
      <img src={messi} alt="Messi" style={{ maxWidth: '300px' }} />
      <div className="description">
        <p><strong>Alias:</strong> La Pulga</p>
        <p><strong>Posición:</strong> Delantero</p>
        <p><strong>Nacionalidad:</strong> Argentina</p>
        <p><strong>Descripción:</strong> Leo Messi es considerado uno de los mejores futbolistas de todos los tiempos. la cabra.</p>
        <p><strong>Carrera:</strong> Jugó principalmente para el FC Barcelona (2004-2021), Paris Saint-Germain (2021-2023) e Inter Miami (2023-presente).</p>
      </div>
    </div>
  )
}
