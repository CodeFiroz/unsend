import './Header.css'
import { Link } from "react-router-dom"
import useThemeStore from '../../store/useThemeStore';

const Header = () => {
  const { darkMode, darkToggle } = useThemeStore()

  return (
    <div className="header">
      <div className="site-logo">
        <h4><Link to="/">Unsend</Link></h4>
        <p>Library of unsend messages</p>
      </div>

      <div className="nav">
        <button onClick={darkToggle} className={`theme ${darkMode ? 'active' : ''}`}>
          <div className="indicator">
            {darkMode ? (
              <i className="bi bi-moon-fill"></i>
            ) : (
              <i className="bi bi-sun-fill"></i>
            )}
          </div>
        </button>

        <Link to="/write-message" className="postBtn">
          <i className="bi bi-plus-lg"></i>
          Write Message
        </Link>

      </div>
    </div>
  )
}

export default Header
