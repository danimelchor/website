import React, { Component } from 'react'
import Project from '../components/Project'

import {PROJECTS} from '../ProjectList'

export default class Projects extends Component {
    state = {
        projectsHtml: []
    }

    componentDidMount() {
        let projectsArr = []
        for(const item of PROJECTS) {
            projectsArr.push(<Project
                title={item.title}
                img={item.img}
                date={item.date}
                url={item.url}
                languages={item.languages}
            />);
        }
        this.setState({projectsHtml:projectsArr})
    }

    render() {
        return (
            <div id="projects" className="w-full mb-24">
                <h1 className="px-10 py-10 w-full text-black text-4xl titleSection bg-primary dark:bg-gray-900 text-center md:text-left">Projects</h1>
                <div className="flex py-10 justify-center content-center flex-wrap px-2">
                    {this.state.projectsHtml}
                </div>
            </div>
        )
    }
}
