import Article from "@/_components/Article";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full pb-20 flex flex-col items-center">
      <div className="w-full max-w-3xl flex flex-col gap-5">
        <div className="flex gap-2 items-center justify-center lg:justify-start">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.14em] dark:text-slate-50 transition-colors">
            Hi! I'm{" "}
            <span className="transition-colors from-blue-600 dark:from-emerald-400 to-emerald-500 dark:to-blue-500 bg-gradient-to-r bg-clip-text text-transparent">
              Daniel
            </span>
            .
          </h1>
          <span className="text-2xl md:text-3x lg:text-4xl">🔸</span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col lg:flex-row gap-5 items-center">
            <Image
              src="/me.jpg"
              width={800}
              height={800}
              alt="Daniel Melchor"
              className="rounded-full h-40 w-40 lg:h-30 lg:w-30"
            />
            <Article>
              Hi there. My name is Daniel Melchor and I'm one of many software
              engineers living in New York city. I now work for{" "}
              <a href="https://www.janestreet.com/" target="_blank">
                Jane Street
              </a>
              , where I'm working on making markets more efficient and tackling
              challenging problems alongside some the smartest people in the
              world (way smarter than me, at least).
            </Article>
          </div>

          <Article>
            <p>
              I'm particularly interested in topics related to probability &
              statistics, computer science, reasoning, mathematics, and
              altruism. I also enjoy rock climbing, and working out.
            </p>
            <div className="flex gap-2">
              <span>🔸</span>
              <span>
                I am part of a large group of people who have pledged to give at
                least 10% of their lifetime income to whichever organizations
                can most effectively use it to improve the lives of others.{" "}
                <a
                  href="https://www.givingwhatwecan.org/pledge"
                  target="_blank"
                >
                  Interested? Learn more.
                </a>
              </span>
            </div>
          </Article>
        </div>
      </div>
    </div>
  );
};

export default About;
