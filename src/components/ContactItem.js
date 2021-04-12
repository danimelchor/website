import React, { Component } from 'react'

export default class ContactItem extends Component {
    render() {
        return (
            <a href={this.props.url} className="block my-5 bg-white dark:bg-gray-800 dark:text-gray-50 rounded p-5 shadow-2xl">
                <div className="bg-primary inline-block align-middle text-center rounded-full w-16 h-16 dark:bg-gray-700">
                    <i className={this.props.icon + " text-3xl text-white block transform -translate-y-2/4 dark:text-gray-800"} style={{ marginTop:"50%" }}></i>
                </div>
                <span className="hover:underline inline-block align-middle text-md md:text-xl ml-5 text-green-500 hover:text-secondary dark:text-secondaryDark dark:hover:text-primaryDark">{this.props.text}</span>
            </a>
        )
    }
}
