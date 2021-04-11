import React, { Component } from 'react'
import Project from '../components/Project'

// Images
import OldWebsite from '../img/oldwebsite.png'
import DjangoWeb from '../img/djangoweb.png'
import Conway from '../img/conway.png'
import SSimage from '../img/ss.png'
import ThisWeb from '../img/thisWeb.png'

var projects = [
    {
        "title": "My first website",
        "img": OldWebsite,
        "date": "10/23/2018",
        "languages": "HTML,CSS,SCSS,SQL,PHP,JavaScript,JQuery",
        "url": "https://github.com/danimelchor/oldWeb"
    },
    {
        "title": "My first django website",
        "img": DjangoWeb,
        "date": "09/11/2020",
        "languages": "HTML,CSS,SCSS,Python,Django,JavaScript,VueJS",
        "url": "https://github.com/danimelchor/websiteDjango"
    },
    {
        "title": "Conway's Game of Life",
        "img": Conway,
        "date": "11/23/2020",
        "languages": "Python",
        "url": "https://github.com/danimelchor/conway"
    },
    {
        "title": "Symptom Survey Bot",
        "img": SSimage,
        "date": "03/24/2021",
        "languages": "Python",
        "url": "https://github.com/danimelchor/buSurveyAndAppointment"
    },
    {
        "title": "This website",
        "img": ThisWeb,
        "date": "04/11/2021",
        "languages": "HTML,CSS,JSX,JavaScript,ReactJS",
        "url": "https://github.com/danimelchor/website/tree/main"
    }
]

export default class Projects extends Component {
    state = {
        projectsHtml: []
    }

    componentDidMount() {
        let projectsArr = []
        for(const item of projects) {
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
