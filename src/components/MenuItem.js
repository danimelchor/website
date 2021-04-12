import React, { Component } from 'react'

export default class MenuItem extends Component {
    state = {
        activeBorder: "0 none"
    }

    componentDidMount() {
        if(this.props.activeNow) {
            this.setState({     
                active: true
            });
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.activeNow !== this.props.activeNow){
            if(this.props.activeNow) {
                this.setState({          
                    active: true
                });
            } else {
                this.setState({          
                    active: false
                });
            }
        }
    }

    render() {
        return (
            <a href={this.props.linkTo}
              className={this.state.active ? "p-3 py-6 pl-4 2xl:pl-6 block w-100 bg-gray-100 shadow-md relative menuItemActive -mr-2 transition-all text-gray-900 border-l-8 border-secondary dark:bg-gray-700 dark:text-gray-100 dark:border-primaryDark" 
                                           : "p-3 py-6 pl-4 2xl:pl-6 block w-100 bg-gray-200 transition-all hover:bg-gray-100 text-gray-700 hover:text-black dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-100 dark:border-primaryDark" }
            >
                <i className={this.props.icon + " inline-block align-middle text-2xl 2xl:text-3xl pr-5 w-12 text-center text-primary dark:text-gray-400"}></i>
                <span className="inline-block align-middle text-md xl:text-lg font-mono" ><span className="text-secondary dark:text-secondaryDark">this</span>{ this.props.text }</span>
            </a>
        )
    }
}
