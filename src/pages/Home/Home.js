import React from 'react'
import Header from '../../components/Header'
import Info from '../../components/Info'
import About from '../../components/About'
import Services from '../../components/Services'
import Skills from '../../components/Skills'
import Education from '../../components/Education'
import Experience from '../../components/Experience'
import Portfolio from '../../components/Portfolio'
import Contact from '../../components/Contact'

import './style/animate.css'
import './style/bootstrap.css'
import './style/bootstrap.css.map'
import './style/flexslider.css'
import './style/style.css'
import './style/style.css.map'
import './fonts/icomoon/icomoon.eot'




function Home() {
    return (
        <div>
            <Info />
            <About /> 
            <Services />
            <Skills />
            <Education />
            <Experience />
            <Portfolio />
            <Contact />
        </div>
    )
}

export default Home;