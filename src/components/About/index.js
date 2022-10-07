import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faHtml5, faCss3, faReact, faAws, faPython } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'
import AnimatedLetters from "../AnimatedLetters";


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    // const nameArray = ['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']

    useEffect(() => {

        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])
    return (
        <>
            <div className="container about-page">
                <div className="text-zone">

                    <h1>
                        {/* About Me */}
                        <AnimatedLetters letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', ' ', 'M', 'e']}
                            idx={15} />
                    </h1>


                    <p>
                        I'm very ambitious Web Developer looking for a role in
                        established IT company with the opportunity to work with the latest
                        technologies on challenging and diverse projects.
                    </p>
                    <p>
                        I make Web Applications with MERN stack and can also make Web Applications using Spring Framework. I have experience in NoSql Databases.
                        The other languages/ frameworks which I am comfortable working with are Hibernate, Flutter, Python, HTML5, CSS, JavaScript, TypeScript and AngularJS.
                    </p>

                    <p>
                        If I had to introduce myself in one line that would be "Throw me in any waters I will learn how to swim."
                    </p>
                </div>

                <div className="stage-cube-cont" >
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faAws} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faPython} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faHtml5} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About