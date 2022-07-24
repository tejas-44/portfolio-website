import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoT from '../../assets/images/tlogo.png'
import LogoSub from '../../assets/images/tej.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faHackerrank, faLinkedin } from '@fortawesome/free-brands-svg-icons'



const Sidebar = () => (
    <div className='nav-bar'>
        <Link className="logo" to='/'>
            <img src={LogoT} alt="logo" />
            <img className="sub-logo" src={LogoSub} alt="Mr Tej" />
        </Link>

        <nav>
            <NavLink exact="true" activeClassName="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeClassName="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeClassName="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>

        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tejas-shelke-1b3b49199/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/tejas-44">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.hackerrank.com/tej44">
                    <FontAwesomeIcon icon={faHackerrank} color="#4d4d4e" />
                </a>
            </li>

        </ul>

    </div>
)

export default Sidebar