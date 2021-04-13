import React, { Component } from 'react'

export default class Skill extends Component {
    render() {
        return (
            <div className="inline-block text-center m-7 h-24 text-center">
                <img className="block max-w-full max-h-full m-auto" src={this.props.img} alt="skillIcon" />
                <p className="text-xl text-primary dark:text-gray-400">{this.props.name}</p>
            </div>
        )
    }
}
