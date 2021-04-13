import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        return (
            <h1 className="px-10 py-10 w-full text-black text-4xl titleSection bg-primary dark:bg-gray-900 text-center md:text-left ">
                <span className="text-secondary dark:text-secondaryDark">this</span>.{this.props.title}()
            </h1>
        )
    }
}
