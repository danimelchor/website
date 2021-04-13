import React, { Component } from 'react'
import Title from '../components/Title'

export default class Experience extends Component {
    render() {
        return (
            <div id="experience" className="w-full mb-24">
                <Title title="experience" />
                <div className="py-10 px-2 m-auto w-full md:w-5/6">
                    <div className="block my-5 bg-white dark:bg-gray-800 dark:text-gray-50 rounded p-10 shadow-2x0l text-justify">
                        <p className="text-lg xl:text-xl leading-10">
                            I am currently on an F-1 Student visa in the United States, which means I can only work on campus. This plus
                            COVID-19 have made finding a job nearly impossible, but once this situation gets better I am looking for any opportunity
                            to get more integrated in the professional world. I have volunteered at many places and participated in non-paid activities. If
                            you are interested in learning more about them, check out my <a className="text-primary hover:text-secondary dark:text-secondaryDark dark:hover:text-primaryDark" href="https://www.linkedin.com/in/dannymelchor/">LinkedIn</a>.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
