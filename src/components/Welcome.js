import React, { Component } from 'react'

import Typewriter from 'typewriter-effect';
import Particles from "react-tsparticles";

export default class Welcome extends Component {
    state = {
        moveText: 0
    }

    componentDidMount() {
        this.setState({moveText:(window.innerHeight-document.getElementById('typewritterBg').clientHeight)/2 })
    }
    render() {
        return (
            <div className="relative h-screen" id="welcome">
                <div className="content-bg absolute h-screen w-full right-0 z-0"></div>
                <div className="w-full absolute right-0 h-screen overflow-hidden">
                    <div className="text-center">
                        <Particles
                            options={{
                                fpsLimit: 45,
                                particles: {
                                    collisions: {
                                        enable: false
                                    },
                                    number: {
                                        value: 200,
                                        density: {
                                            enable: true,
                                            area: 800,
                                            factor: 1000
                                        }
                                    },
                                    links: {
                                        enable: true,
                                        distance: 80,
                                        opacity: 0.5,
                                        color: "#fff",
                                        width: 2
                                    },
                                    move: {
                                        direction: "none",
                                        enable: true,
                                        outMode: "bounce",
                                        random: false,
                                        speed: 1,
                                        straight: false
                                    },
                                    opacity: {
                                        value: 0.7
                                    },
                                    color: {
                                        value: "#fff"
                                    },
                                    shape: {
                                        type: "circle"
                                    },
                                    size: {
                                        value: 10
                                    },
                                    shape: {
                                        type: "char",
                                        character: [
                                            {
                                                fill: true,
                                                font: "Monospace",
                                                value: ["1", "0"],
                                                style: "",
                                                weight: 400
                                            }
                                        ],
                                    }
                                },
                                interactivity: {
                                    detectsOn: "canvas",
                                    events: {
                                        onHover: {
                                            enable: true,
                                            mode: "repulse",
                                        },
                                        onDiv: [{
                                            enable: true,
                                            mode: "bounce",
                                            type: "rectangle",
                                            ids: "typewritterBg",
                                        }],
                                        resize: true,
                                    },
                                    modes: {
                                        repulse: {
                                            distance: 150,
                                            duration: 3
                                        },
                                    },
                                },
                                detectRetina: true
                            }}

                            className="absolute w-full h-screen"
                        />
                    </div>
                    <div
                        id="typewritterBg"
                        className="typewritterBg p-1 w-5/6 md:w-2/3 lg:w-1/2 border-4 border-secondary dark:border-primaryDark"
                        style={{ marginTop: this.state.moveText + "px" }}
                    >
                        <Typewriter
                            className="typewritterText"
                            options={{
                                strings: ['Front end', 'Back end', 'Algorithms', 'Websites', 'UI/UX'],
                                autoStart: true,
                                loop: true,
                                wrapperClassName: "text-white relative top-0",
                                cursorClassName: "text-white"
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
