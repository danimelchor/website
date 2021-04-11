import React, { Component } from 'react'

import Welcome from '../components/Welcome'

import About from '../pages/About'
import Experience from '../pages/Experience'
import Projects from '../pages/Projects'
import Skills from '../pages/Skills'
import Education from '../pages/Education'
import Contact from '../pages/Contact'
import Resume from '../pages/Resume'


export default class Content extends Component {
    render() {
        return (
            <div className="w-screen md:w-3/4 lg:w-4/5 xl:w-5/6 right-0 z-0 absolute">
                <div className="relative z-10">
                    <Welcome />
                    <About />
                    <Experience />
                    <Projects />
                    <Skills />
                    <Education />
                    <Contact />
                    <Resume />
                </div>
            </div>
        )
    }
}
