import './index.scss';
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useEffect, useState } from 'react'
import AnimatedLetters from "../AnimatedLetters";

const Contact = () => {
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

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2n1en6q', 'template_ay2fabj', form.current, 'Yop1qy1pLTg6iAjGH')
            .then(
                () => {
                    alert('Message successfully sent! Sit Back and Chillax until I get to you')

                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            );
    };

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        {/* Contact Me */}
                        <AnimatedLetters letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', ' ', 'M', 'e']}
                            idx={15} />
                    </h1>
                    <p>
                        I am interested in internship or full-time job opportunities. However, if you have other request or question,
                        don't hesitate to contact me using below form either.
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Tejas Shelke
                    <br />
                    India,
                    <br />
                    Uran-Mora Road - 400702 <br />
                    Uran <br />
                    <span>t3j.sh3@gmail.com</span>


                </div>
                <div className="map-wrap">
                    <MapContainer center={[18.880026, 72.936023]} zoom={16}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[18.880026, 72.936023]}>
                            <Popup>Comeover for a coffee!!!</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>

            <Loader type='pacman' />
        </>

    )
}


export default Contact