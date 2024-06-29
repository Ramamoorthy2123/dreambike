import './Header.css';
import logo from "../../Asset/logo.png"

const Header = () => {
    return (
        <div className='nav'>
        <div className="nav-logo">
        <img src={logo} alt="logo"  />
        </div>
        <ul className="nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav-contact'>Contact</li>
        </ul>
        </div>
    )
}

export default Header;