const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.14em] w-11/12 md:w-5/6 lg:w-1/2 text-center dark:text-slate-50">
        Hi! 👋 My name is{" "}
        <span className="transition-all from-blue-600 dark:from-emerald-500 to-emerald-500 dark:to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
          Daniel
        </span>{" "}
        and I am a Software Engineer.
      </h1>
    </div>
  );
};

export default About;
