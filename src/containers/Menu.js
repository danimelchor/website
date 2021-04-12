import React, { Component } from 'react'
import MenuItem from '../components/MenuItem'

import me from '../img/me.jpg'
import grid from '../img/grid2.png'
import darkGrid from '../img/darkGrid.png'

export default class Menu extends Component {
    state = {
        active: [true, false, false, false, false, false, false, false],
        menuActive: false,
        moon: "far fa-moon"
    }

    toggleMenu() {
        console.log('click');
        this.setState({ menuActive: !this.state.menuActive })
    }

    componentDidMount() {
        let current = localStorage.getItem('theme')
        if (current === null) {
            this.setState({ moon: 'far fa-moon' });
            document.body.style.backgroundImage = "url(" + grid + ")";
            document.documentElement.classList.remove('dark');
        } else if (current === 'dark') {
            this.setState({ moon: 'fas fa-moon' });
            document.body.style.backgroundImage = "url(" + darkGrid + ")";
            document.documentElement.classList.add('dark');
        } else if (current === 'light') {
            this.setState({ moon: 'far fa-moon' });
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
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
            this.setState({ moon: 'fas fa-moon' });
            document.body.style.backgroundImage = "url(" + darkGrid + ")";
        } else if (current === 'dark') {
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
            this.setState({ moon: 'far fa-moon' });
            document.body.style.backgroundImage = "url(" + grid + ")";
        } else if (current === 'light') {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
            this.setState({ moon: 'fas fa-moon' });
            document.body.style.backgroundImage = "url(" + darkGrid + ")";
        }
    }

    render() {
        return (
            <>
                <div className="fixed md:hidden top-0 w-full z-10 text-center shadow-2xl bg-white dark:bg-gray-900 p-5 border-b-4 border-primary dark:border-primaryDark">
                    <i onClick={() => this.toggleMenu()} class="fas fa-bars text-3xl inline-block align-middle px-3 text-primary dark:text-primaryDark float-left"></i>
                    <a className="text-3xl inline-block align-middle text-primary dark:text-gray-300" href="/">Daniel Melchor</a>
                    <div
                        className="transition-none inline-block md:hidden float-right rounded shadow-2xl p-3 cursor-pointer text-center align-middle bg-gray-200 text-md dark:text-primaryDark dark:bg-gray-800 border-b-2 border-gray-400 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-700"
                        onClick={this.changeTheme.bind(this)}
                    >
                        <i className={this.state.moon + " block"}></i>
                    </div>
                </div>
                <div
                    className="w-5/6 shadow-2xl fixed md:w-1/4 lg:w-1/5 xl:w-1/6 h-screen z-50 bg-white dark:bg-gray-800"
                    style={this.state.menuActive ? { display: "block" } : { display: "none" }}
                >
                    <div
                        className="transition-none hidden rounded md:block p-3 cursor-pointer text-center bg-gray-200 absolute top-2 right-2 text-md dark:text-primaryDark dark:bg-gray-900 border-b-2 border-gray-400 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-700"
                        onClick={this.changeTheme.bind(this)}
                    >
                        <i className={this.state.moon + " block"}></i>
                    </div>
                    <div className="w-full py-5 flex flex-wrap items-center justify-center hidden md:block border-b-4 border-primary dark:border-primaryDark text-center">
                        <img className="rounded-full block w-1/2 m-auto my-4" src={me} alt="" />
                        <a className="text-3xl w-full text-center text-primary dark:text-primaryDark" href="/">Daniel Melchor</a>
                    </div>
                    <div className="pt-5">
                        <div className="md:hidden z-20 w-full mb-2 block px-3 text-center">
                            <p className="text-3xl inline-block align-middle text-primary dark:text-gray-300">Menu</p>
                            <i onClick={() => this.toggleMenu()} className="fas fa-times text-3xl float-right inline-block align-middle text-primary dark:text-primaryDark"></i>
                        </div>
                        <MenuItem text="Welcome" icon="fab fa-creative-commons-zero" linkTo="#welcome" activeNow={this.state.active[0]} />
                        <MenuItem text="About" icon="fas fa-user" linkTo="#about" activeNow={this.state.active[1]} />
                        <MenuItem text="Experience" icon="fas fa-user-tie" linkTo="#experience" activeNow={this.state.active[2]} />
                        <MenuItem text="Projects" icon="fas fa-tools" linkTo="#projects" activeNow={this.state.active[3]} />
                        <MenuItem text="Skills" icon="fas fa-chart-bar" linkTo="#skills" activeNow={this.state.active[4]} />
                        <MenuItem text="Education" icon="fas fa-graduation-cap" linkTo="#education" activeNow={this.state.active[5]} />
                        <MenuItem text="Contact" icon="fas fa-comment-dots" linkTo="#contact" activeNow={this.state.active[6]} />
                        <MenuItem text="Resume" icon="fas fa-file" linkTo="#resume" activeNow={this.state.active[7]} />
                    </div>
                </div>
            </>
        )
    }
}
