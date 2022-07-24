
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import Home from "./components/Home"
import About from './components/About'
import Contact from './components/Contact'
import { Helmet } from 'react-helmet'


function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio | Tejas Shelke</title>

      </Helmet>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
