import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import LogoT from '../../assets/images/tlogo.png'
import LogoSub from '../../assets/images/tej.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faHackerrank, faLinkedin } from '@fortawesome/free-brands-svg-icons'



const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className='nav-bar'>
            <Link
                className="logo"
                to="/"
                onClick={() => setShowNav(false)}>
                <img src={LogoT} alt="logo" />
                <img className="sub-logo" src={LogoSub} alt="Mr Tej" />
            </Link>

            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    to="/"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="about-link"
                    to="/about"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="portfolio-link"
                    to="/portfolio"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="contact-link"
                    to="/contact"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#ffd700"
                    size="3x"
                    className='close-icon' />


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
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size="3x"
                className='hamburger-icon' />
        </div>
    )

}

export default Sidebar