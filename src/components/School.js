import React, { Component } from 'react'

export default class School extends Component {
    state = {
        types: []
    }

    componentDidMount() {
        let typesHtml = []
        for(const i of this.props.type) {
            typesHtml.push(<li>{i}</li>)
        }
        this.setState({ types: typesHtml })
    }

    render() {
        return (
            <div className="p-10 my-5 md:my-0 bg-white dark:bg-gray-900 dark:text-gray-50 md:w-2/5 md:mx-5 rounded shadow-2xl">
                <h2 className="uppercase text-2xl text-green-500 hover:text-secondary dark:text-secondaryDark dark:hover:text-primaryDark" ><a href={this.props.url} target="_blank">{this.props.school}</a></h2>
                <span className="text-gray-700 block mb-3 dark:text-gray-400" >{this.props.year}</span>
                <ul className="list-disc list-inside">
                    {this.state.types}
                </ul>
            </div>
        )
    }
}
