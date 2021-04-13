import React, { Component } from 'react'
import Project from '../components/Project'
import Title from '../components/Title'

import {PROJECTS} from '../ProjectList'

export default class Projects extends Component {
    state = {
        projectsHtml: []
    }

    componentDidMount() {
        let projectsArr = PROJECTS.map((item,index) => {
            return(<Project
                key={index}
                title={item.title}
                img={item.img}
                date={item.date}
                url={item.url}
                languages={item.languages}
            />);
        });
        this.setState({projectsHtml:projectsArr})
    }

    render() {
        return (
            <div id="projects" className="w-full mb-24">
                <Title title="projects" />
                <div className="flex py-10 justify-center content-center flex-wrap px-2">
                    {this.state.projectsHtml}
                </div>
            </div>
        )
    }
}
