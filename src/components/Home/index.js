import Loader from "react-loaders";
import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/homename.png";
import "./index.scss";
import Logo from "./logo";
import { useEffect, useState } from 'react'
import AnimatedLetters from "../AnimatedLetters";
import Globe from "../globe/globe";



const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['H', 'i', ',', ' ', 'I', ' ', 'a', 'm']
    const jobArray = [
        'S',
        'o',
        'f',
        't', 'w', 'a', 'r', 'e',
        ' ',
        'D',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
    ]

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
            <div className="container home-page">
                <div className="text-zone">
                    <h1 className="hero-text">
                        {/* Hi,  I'm <br /> */}
                        <AnimatedLetters letterClass={letterClass}
                            strArray={nameArray}
                            idx={15} />
                        <br />
                        <img
                            src={LogoTitle}
                            alt="TEJAS HERE"
                            className="name-logo"
                        />
                        <br />
                        {/* Software Developer */}
                        <AnimatedLetters letterClass={letterClass}
                            strArray={jobArray}
                            idx={15}
                            className="job-array"
                        />
                    </h1>
                    <h2>
                        Frontend Engineer / Java Spring Developer  / AWS Cloud Practitioner
                    </h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
                {/* <Logo /> */}
                <Globe/>


            </div >
            <Loader type="pacman" />
        </>

    );

}

export default Home