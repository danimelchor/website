import React, { Component } from 'react'

import { Link } from 'react-scroll'

export default class MenuItem extends Component {
    state = {
        active: false
    }

    componentDidMount() {
        this.onScroll();
        window.addEventListener('scroll', this.onScroll.bind(this))
    }

    // Checks window scroll to see if a menu element should be highlighted
    onScroll() {
        let thisHeight = document.getElementById(this.props.linkTo).clientHeight;
        let thisOffsetTop = document.getElementById(this.props.linkTo).offsetTop
        let offset = window.innerHeight/3
        if((window.scrollY + offset > thisOffsetTop) && (window.scrollY + offset < thisOffsetTop + thisHeight)) {
            this.setState({active:true})
        } else {
            this.setState({active:false})
        }
    }

    render() {
        return (
            <Link
                to={this.props.linkTo}
                smooth={true}
                duration={400}
                delay={0}
                spy={true}
                offset={window.innerWidth < 768 ? -84 : 0}
                ignoreCancelEvents={true}
                style={
                    window.innerHeight > window.innerWidth?{paddingTop:"2vh",paddingBottom:"2vh"}:{paddingTop:"2vh",paddingBottom:"2vh"}
                }
                className={(this.state.active ? "cursor-pointer px-3 pl-4 2xl:pl-6 block w-100 bg-gray-100 shadow-md relative menuItemActive -mr-2 transition-all text-gray-900 border-l-8 border-secondary dark:bg-gray-700 dark:text-gray-100 dark:border-primaryDark" 
                                             : "cursor-pointer px-3 pl-4 2xl:pl-6 block w-100 bg-gray-200 transition-all hover:bg-gray-100 text-gray-700 hover:text-black dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-100 dark:border-primaryDark" )}
            >
                <i className={this.props.icon + " inline-block align-middle text-2xl 2xl:text-3xl pr-5 w-12 text-center text-primary dark:text-gray-400"}></i>
                <span className="inline-block align-middle text-md xl:text-lg font-mono" ><span className="text-secondary dark:text-secondaryDark">this</span>{ this.props.text }</span>
            </Link>
        )
    }
}
