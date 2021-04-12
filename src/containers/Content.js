import React, { Component } from 'react'

import Welcome from '../components/Welcome'

import About from '../pages/About'
import Experience from '../pages/Experience'
import Projects from '../pages/Projects'
import Skills from '../pages/Skills'
import Education from '../pages/Education'
import Contact from '../pages/Contact'
import Resume from '../pages/Resume'
import Footer from '../pages/Footer'


export default class Content extends Component {
    state = {
        active : 0
    }

    componentDidUpdate(prevProps) {
        if (prevProps.active !== this.props.active) {
            this.setState({ active: this.props.active })
        }
    }

    render() {
        return (
            <div className="w-screen md:w-2/3 lg:w-3/4 2xl:w-4/5 right-0 z-0 absolute">
                <div className="relative z-10">
                    <Welcome active={this.state.active} />
                    <About />
                    <Experience />
                    <Projects />
                    <Skills />
                    <Education />
                    <Contact />
                    <Resume />
                    <Footer />
                </div>
            </div>
        )
    }
}
