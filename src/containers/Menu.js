import React, { Component } from 'react'
import MenuItem from '../components/MenuItem'

import me from '../img/me.jpg'
import grid from '../img/grid2.png'
import darkGrid from '../img/darkGrid.png'

export default class Menu extends Component {
    state = {
        active: [true, false, false, false, false, false, false, false],
        menuActive: false,
        moon: "fas fa-moon"
    }

    toggleMenu() {
        console.log('click');
        this.setState({ menuActive: !this.state.menuActive })
    }

    componentDidMount() {
        let current = localStorage.getItem('theme')
        if (current === null) {
            this.setState({ moon: 'far fa-moon' });
            document.body.style.backgroundImage = "url(" + darkGrid + ")";
            document.documentElement.classList.add('dark');
        } else if (current === 'dark') {
            this.setState({ moon: 'far fa-moon' });
            document.body.style.backgroundImage = "url(" + darkGrid + ")";
            document.documentElement.classList.add('dark');
        } else if (current === 'light') {
            this.setState({ moon: 'fas fa-moon' });
            document.body.style.backgroundImage = "url(" + grid + ")";
            document.documentElement.classList.remove('dark');
        }

        window.addEventListener('resize', this.handleResize.bind(this))
        if (window.innerWidth >= 640) {
            this.setState({ menuActive: true })
        }
    }

    handleResize() {
        if (window.innerWidth >= 640) {
            this.setState({ menuActive: true })
        } else {
            this.setState({ menuActive: false })
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.active !== this.props.active) {
            let arr = [false, false, false, false, false, false, false, false]
            arr[this.props.active] = true;
            this.setState({ active: arr })
        }
    }

    changeTheme() {
        let current = localStorage.getItem('theme')
        console.log(current);
        if (current === null) {
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
            this.setState({ moon: 'fas fa-moon' });
            document.body.style.backgroundImage = "url(" + grid + ")";
        } else if (current === 'dark') {
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
            this.setState({ moon: 'fas fa-moon' });
            document.body.style.backgroundImage = "url(" + grid + ")";
        } else if (current === 'light') {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
            this.setState({ moon: 'far fa-moon' });
            document.body.style.backgroundImage = "url(" + darkGrid + ")";
        }
    }

    render() {
        return (
            <>
                <div className="font-mono fixed md:hidden top-0 w-full z-10 text-center shadow-2xl bg-gray-100 dark:bg-gray-900 py-5 sm:p-5 border-b-4 border-primary dark:border-primaryDark">
                    <div className="relative h-10">
                        <i onClick={() => this.toggleMenu()} class="left-8 absolute fas fa-bars text-3xl sm:text-4xl sm:px-3 text-primary dark:text-primaryDark inline-block align-middle"></i>
                        <a className="text-xl sm:text-2xl text-gray-800 dark:text-gray-300 inline-block align-middle absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" href="/">
                            <span className="text-blue-700 dark:text-blue-300">class</span> User(<span className="text-secondary dark:text-secondaryDark">DM</span>):
                        </a>
                        <div
                            className="right-8 absolute transition-none md:hidden rounded shadow-2xl p-2 sm:p-3 cursor-pointer text-center bg-primary text-md dark:text-secondaryDark
                                       dark:bg-gray-600 border-b-2 border-gray-900 dark:border-gray-500 hover:bg-gray-900 dark:hover:bg-gray-700 inline-block align-middle text-secondary"
                            onClick={this.changeTheme.bind(this)}
                        >
                            <i className={this.state.moon + " block"}></i>
                        </div>
                    </div>
                </div>
                <div
                    className="transition-none hidden md:block z-50 py-4 px-7 cursor-pointer text-center bg-primary text-md fixed right-0
                               dark:text-secondaryDark dark:bg-gray-600 border-b-2 border-l-2  border-secondary dark:border-secondaryDark
                               hover:bg-gray-900 dark:hover:bg-gray-700 text-secondary"
                    onClick={this.changeTheme.bind(this)}
                >
                    <i className={this.state.moon + " block"}></i>
                </div>
                <div
                    className="font-mono w-5/6 md:w-1/3 lg:w-1/4 2xl:w-1/5 shadow-2xl fixed h-screen z-50 bg-gray-200 dark:bg-gray-800"
                    style={this.state.menuActive ? { display: "block" } : { display: "none" }}
                >
                    <div className="hidden md:block border-b-4 border-secondary dark:border-secondaryDark text-center">
                        <div className="text-primary dark:text-blue-300 font-bold text-2xl inline-block py-5 font-sans" >danielmelchor.com</div>
                    </div>
                    <div className="md:top-1/2 md:absolute transform md:-translate-y-2/4 w-full">
                        <div className="w-full pt-5 flex flex-wrap items-center justify-center hidden md:block">
                            <a className="pl-5 text-xl w-full text-gray-800 dark:text-gray-300" href="/">
                                <span className="text-green-900 dark:text-blue-300">class</span> User(<span className="text-secondary dark:text-secondaryDark">D<span className="hidden xl:inline">aniel</span>M<span className="hidden xl:inline">elchor</span></span>):
                            </a>
                        </div>
                        <div className="pt-2 xl:pt-5">
                            <div className="md:hidden z-20 w-full mb-2 block px-3 text-center">
                                <p className="text-3xl inline-block align-middle text-primary dark:text-gray-300">Menu</p>
                                <i onClick={() => this.toggleMenu()} className="fas fa-times text-3xl float-right inline-block align-middle text-primary dark:text-primaryDark"></i>
                            </div>
                            <MenuItem text=".welcome()" icon="fab fa-creative-commons-zero" linkTo="#welcome" activeNow={this.state.active[0]} />
                            <MenuItem text=".about()" icon="fas fa-user" linkTo="#about" activeNow={this.state.active[1]} />
                            <MenuItem text=".experience()" icon="fas fa-user-tie" linkTo="#experience" activeNow={this.state.active[2]} />
                            <MenuItem text=".projects()" icon="fas fa-tools" linkTo="#projects" activeNow={this.state.active[3]} />
                            <MenuItem text=".skills()" icon="fas fa-chart-bar" linkTo="#skills" activeNow={this.state.active[4]} />
                            <MenuItem text=".education()" icon="fas fa-graduation-cap" linkTo="#education" activeNow={this.state.active[5]} />
                            <MenuItem text=".contact()" icon="fas fa-comment-dots" linkTo="#contact" activeNow={this.state.active[6]} />
                            <MenuItem text=".resume()" icon="fas fa-file" linkTo="#resume" activeNow={this.state.active[7]} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
