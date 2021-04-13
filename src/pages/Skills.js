import React, { Component } from 'react'
import SkillContainer from '../containers/SkillContainer'
import Title from '../components/Title'

import HTML from '../img/HTML-logo.png'
import CSS from '../img/CSS-logo.png'
import SCSS from '../img/SCSS-logo.png'
import JavaScript from '../img/JavaScript-logo.png'
import ReactJS from '../img/ReactJS-logo.png'
import VueJS from '../img/VueJS-logo.png'
import JQuery from '../img/JQuery-logo.png'
import PHP from '../img/PHP-logo.png'
import Python from '../img/Python-logo.png'
import Django from '../img/Django-logo.png'
import SQL from '../img/SQL-logo.png'
import Java from '../img/Java-logo.png'
import CSharp from '../img/CSharp-logo.png'
import CPlus from '../img/CPlus-logo.png'
import Photoshop from '../img/Photoshop-logo.png'
import GitHub from '../img/GitHub-logo.png'

export default class Skills extends Component {
    render() {
        return (
            <div id="skills" className="w-full mb-24">
                <Title title="skills" />
                <div className="py-10 px-2 m-auto w-full md:w-5/6">
                    <SkillContainer
                        title="Front-End"
                        imgs={[HTML,CSS,JavaScript,SCSS,ReactJS,VueJS,JQuery]}
                        names={['HTML','CSS','JavaScript','SCSS','ReactJS','VueJS','JQuery']}
                    />
                    <SkillContainer
                        title="Back-End"
                        imgs={[PHP,Python,Django,SQL]}
                        names={['PHP','Python','Django','SQL']}
                    />
                    <SkillContainer
                        title="Other Languages"
                        imgs={[Java,CSharp,CPlus,Python]}
                        names={['Java','C#','C++','Python']}
                    />
                    <SkillContainer
                        title="Other"
                        imgs={[Photoshop,GitHub]}
                        names={['Photoshop','GitHub']}
                    />
                </div>
            </div>
        )
    }
}
