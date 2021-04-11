import React, { Component } from 'react'
import ContactItem from '../components/ContactItem'

export default class Contact extends Component {
    render() {
        return (
            <div id="contact" className="w-full mb-24">
                <h1 className="px-10 py-10 w-full text-black text-4xl titleSection bg-primary dark:bg-gray-900 text-center md:text-left">Contact</h1>
                <div className="py-10 px-2 m-auto w-full md:w-5/6">
                    <ContactItem
                        icon="fas fa-envelope"
                        type="Gmail"
                        url="mailto:dmh672@gmail.com"
                        text="dmh672@gmail.com"
                    />
                    <ContactItem
                        icon="fab fa-github"
                        type="GitHub"
                        url="https://github.com/danimelchor"
                        text="github.com/danimelchor"
                    />
                    <ContactItem
                        icon="fab fa-linkedin-in"
                        type="LinkedIn"
                        url="https://www.linkedin.com/in/dannymelchor/"
                        text="linkedin.com/in/dannymelchor/"
                    />
                </div>
            </div>
        )
    }
}
