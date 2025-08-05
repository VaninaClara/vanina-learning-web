import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header style={{ background: '#0077b6', padding: '1rem' }}>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/" style={{ color: 'white' }}>Inicio</Link>
        <Link to="/sobre-mi" style={{ color: 'white' }}>Sobre mí</Link>
        <Link to="/tecnologias" style={{ color: 'white' }}>Mis Tecnologías</Link>
        <Link to="/contacto" style={{ color: 'white' }}>Contacto</Link>
      </nav>
    </header>
  )
}
