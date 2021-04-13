import React, { Component } from 'react'
import meSergio from '../img/meSergio.jpg'
import meFriends from '../img/meFriends.jpg'
import Title from '../components/Title'

export default class About extends Component {
    render() {
        return (
            <div id="about" className="w-full z-10 mb-24">
                <Title title="about" />
                <div className="py-10 px-2 m-auto w-full md:w-5/6">
                    <div className="block my-5 bg-white dark:bg-gray-800 dark:text-gray-50 rounded p-5 md:p-10 shadow-2xl overflow-hidden">
                        <div className="my-5">
                            <img src={meFriends} className="xl:w-5/12 xl:inline-block" alt="me and bu friends" />
                            <p className="xl:inline-block text-lg xl:text-xl leading-10 xl:ml-12 text-justify xl:w-1/2 my-10 xl:my-0">
                                Hello World! My name is Daniel, and I am an 18-year-old studying Computer Science at Boston University.
                                I started coding when I was around 8 years old and I have absolutely loved it ever since.
                                I've always liked learning new things so my interests are very diverse, like, for example: cryptocurrencies,
                                snowboarding, finance, politics, graphic design, artificial intelligence...
                            </p>
                        </div>
                        <div className="my-5 align-middle">
                            <img src={meSergio} className="xl:float-right xl:w-5/12 xl:inline-block xl:h-1/4" alt="me and sergio" />
                            <div className="xl:inline-block text-lg xl:text-xl leading-10 xl:mr-12 text-justify xl:w-1/2 my-10 xl:my-0">
                                <p className="my-4" >
                                    I decided to create this simple website to showcase some of the projects I have worked on during my life.
                                    Some of them were made a very long time ago and I have decided to not maintain them and focus on newer and better
                                    ones.
                                </p>
                                <p className="my-4" >
                                    If you are interested in having a chat or working on a project with me don't doubt in messaging me in 
                                    the <a href="#contact" className="text-primary hover:text-secondary dark:text-secondaryDark dark:hover:text-primaryDark">contact section</a>!
                                </p>
                                <p className="my-4" >
                                    My current focus is placed on finishing my <a className="text-primary hover:text-secondary dark:text-secondaryDark dark:hover:text-primaryDark" href="https://www.bu.edu/academics/cas/programs/computer-science/ba-ms/">
                                    BA/MS</a> (Bachelor of Arts + Master of Sciences) in 4 years, most likely
                                    in Computer Science and a M.S. in A.I., but I am open to contribute in any project
                                    with a good purpose. For example, a group of me and 3 other students are remodeling the Boston University's
                                    registration tool to give it a modern design and new functionality. Check it out <a className="text-primary hover:text-secondary dark:text-secondaryDark dark:hover:text-primaryDark" href="http://bunexus.com">here</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
