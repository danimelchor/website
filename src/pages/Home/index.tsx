import { useEffect } from "react";
import { useParams } from "react-router-dom";

import About from "./Sections/About";
import Experience from "./Sections/Experience";
import Education from "./Sections/Education";
import Footer from "./Sections/Footer";
import Welcome from "./Sections/Welcome";
import Menu from "./Menu";

export default function Home() {
  const params = useParams();

  useEffect(() => {
    let section = params.section;

    if (section === "projects") {
      let loc = document.getElementById(section)?.offsetTop;
      setTimeout(() => {
        window.scroll(0, loc || 0);
      }, 500);
    } 
  }, [params]);

  return (
    <div className="w-full min-h-full">
      <div className="w-screen right-0 z-0 absolute">
        <div className="relative z-10">
          <Welcome />
          <div className="flex flex-col md:flex-row items-start w-full">
            <Menu />
            <div className="flex flex-col justify-start items-end w-screen md:w-2/3 lg:w-3/4 2xl:w-4/5">
              <About />
              <Experience />
              <Education />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
