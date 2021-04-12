import React, { Component } from 'react'

export default class Project extends Component {
    state = {
        languages: []
    }

    componentDidMount() {
        let arr = []
        for(const i of this.props.languages.split(',')) {
            arr.push(<span className="py-1 px-2 inline-block rounded m-1 text-white" style={{backgroundColor:"#18242C"}}>{i}</span>)
        }
        this.setState({languages:arr})
    }

    render() {
        return (
            <a href={this.props.url} className="shadow-2xl block w-full my-5 md:m-5 md:w-5/6 lg:w-1/4">
                <div className="relative h-6 w-full bg-gray-300 dark:bg-gray-800">
                    <h2 className="absolute inline-block align-middle transform overflow-hidden -translate-x-2/4 dark:text-gray-100" style={{ left:"50%" }} >{this.props.title}</h2>
                    <div className="inline-block align-middle float-right">
                        <div className="rounded-full h-3 w-3 inline-block mx-1" style={{ backgroundColor: "#FFC800" }}></div>
                        <div className="rounded-full h-3 w-3 inline-block mx-1" style={{ backgroundColor: "#2FA963" }}></div>
                        <div className="rounded-full h-3 w-3 inline-block mx-1" style={{ backgroundColor: "#2F4858" }}></div>
                    </div>
                </div>
                <div className=" relative">
                    <img src={this.props.img} alt="" className=" object-cover z-0" />
                    <div className="absolute top-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity">
                        <div className="absolute z-0 top-0 w-full h-full opacity-90 bg-primary"></div>
                        <span className="absolute right-0 top-0 m-3 text-gray-200 ">{this.props.date}</span>
                        <div className="text-center absolute top-2/4 transform -translate-y-2/4 w-full p-5">
                            {this.state.languages}
                        </div>
                    </div>
                </div>
            </a>
        )
    }
}
