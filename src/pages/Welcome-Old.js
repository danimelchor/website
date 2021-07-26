import React, { Component } from "react";

import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";

export default class Welcome extends Component {
  render() {
    return (
      <div className="relative h-screen" id="welcome">
        <div className="content-bg absolute h-screen w-full right-0 z-0"></div>
        <div className="w-full absolute right-0 h-screen overflow-hidden">
          {/* Terminal animation */}
          <div
            id="typewritterBg"
            className="typewritterBg w-11/12 m-auto md:w-3/4 rounded h-2/3"
          >
            <div className="relative h-6 w-full bg-gray-300 dark:bg-gray-800 rounded-t">
              <h2 className="absolute inline-block align-middle dark:text-gray-100 left-1/2 transform -translate-x-1/2">
                Terminal
              </h2>
              <div className="inline-block align-middle float-right">
                <div className="rounded-full h-3 w-3 inline-block mx-1 bg-green-500"></div>
                <div className="rounded-full h-3 w-3 inline-block mx-1 bg-yellow-500"></div>
                <div className="rounded-full h-3 w-3 inline-block mx-1 bg-red-500"></div>
              </div>
            </div>
            <div className="p-7 md:text-xl bg-black text-secondary dark:text-gray-200 h-full border-t-2 border-gray-200 dark:border-gray-500 font-mono rounded-b">
              <Typewriter
                options={{
                  cursor: "█",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(70)
                    .typeString("$ cd ~/Documents/Website")
                    .pasteString("<p class='mt-3'></p>")
                    .typeString("$ python Start.py")
                    .pasteString("<p class='mt-3'></p>")
                    .typeString('> user = new User("Daniel Melchor")<br />')
                    .pasteString("<p class='mt-3'></p>")
                    .typeString("> print(user)<br />")
                    .pasteString(
                      "<p class='mt-3'> - Full-stack web developer</p>"
                    )
                    .pasteString("<p class='mt-3'> - Back-end developer</p>")
                    .pasteString("<p class='my-3'> - Algorithm efficiency</p>")
                    .pasteString("<p class='my-3'> - Contact me!</p>")
                    .pasteString("> ")
                    .pauseFor(2500)
                    .typeString("quit()")
                    .pasteString("<p class='mt-3'></p>")
                    .typeString("$ ")
                    .callFunction(() => {
                      // Terminal animation should scroll down to about
                      // only if user is looking at it
                      let thisHeight =
                        document.getElementById("welcome").clientHeight;
                      let thisOffsetTop =
                        document.getElementById("welcome").offsetTop;
                      let offset = window.innerHeight / 2;
                      if (
                        window.scrollY + offset > thisOffsetTop &&
                        window.scrollY + offset < thisOffsetTop + thisHeight
                      ) {
                        var Scroll = require("react-scroll");
                        var scroller = Scroll.scroller;
                        scroller.scrollTo("about", {
                          duration: 400,
                          delay: 0,
                          smooth: true,
                          offset: window.innerWidth < 768 ? -84 : 0,
                        });
                      }
                    })
                    .start();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
