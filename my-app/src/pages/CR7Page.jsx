import { Link } from 'react-router-dom'
import cr7 from '../img/cr7.jpg'
import '../App.css'

export default function CR7Page() {
  return (
    <div className="description-page">
      <div className="back-button">
        <Link to="/">← Volver</Link>
      </div>
      <h1>Cristiano Ronaldo</h1>
      <img src={cr7} alt="CR7" style={{ maxWidth: '300px' }} />
      <div className="description">
        <p><strong>Alias:</strong> CR7</p>
        <p><strong>Posición:</strong> Delantero</p>
        <p><strong>Nacionalidad:</strong> Portugal</p>
        <p><strong>Descripción:</strong> Cristiano Ronaldo es uno de los futbolistas más goleadores de la historia, solo por detras de messi.</p>
        <p><strong>Carrera:</strong> Ha jugado para Sporting, Manchester United, Real Madrid, Juventus y actualmente para Al Nassr.</p>
      </div>
    </div>
  )
}
