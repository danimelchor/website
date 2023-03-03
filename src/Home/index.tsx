import About from "./Sections/About";
import Experience from "./Sections/Experience";
import Education from "./Sections/Education";
import Footer from "./Sections/Footer";
import Welcome from "./Sections/Welcome";
import Menu from "./Menu";

export default function Home() {
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
