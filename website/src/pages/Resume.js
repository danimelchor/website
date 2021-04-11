import React, { Component } from 'react'
import ResumePdf from '../pdf/danielmelchor_resume.pdf'

export default class Resume extends Component {
    render() {
        return (
            <div id="resume" className="w-full mb-24" style={{height: "66vh"}}>
                <h1 className="px-10 py-10 w-full text-black text-4xl titleSection bg-primary dark:bg-gray-900 text-center md:text-left">Resume</h1>
                <div className="py-10 px-2 m-auto w-full md:w-5/6">
                    <a href={ResumePdf} className="block my-5 bg-white dark:bg-gray-900 dark:text-secondaryDark rounded p-5 shadow-2xl text-green-500 hover:text-secondary dark:text-secondaryDark dark:hover:text-primaryDark">
                        <i className="fas fa-share-square inline-block text-3xl align-middle"></i>
                        <p className="inline-block ml-5 align-middle text-xl">Open my resume<span className="ml-2 font-light">(PDF)</span></p>
                    </a>
                </div>
            </div>
        )
    }
}
