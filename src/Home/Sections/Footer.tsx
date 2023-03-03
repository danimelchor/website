export default function Footer() {
  return (
    <div
      id="footer"
      className="w-full py-10 bg-gray-900 text-gray-200 text-lg text-center"
    >
      <div className="m-auto w-full px-7 md:px-0 md:w-2/3 lg:w-1/2">
        <h1 className="font-bold text-2xl">Contribute / Use code</h1>
        <p>
          <a
            className="text-secondaryDark hover:text-primaryDark"
            href="/"
          >
            danielmelchor.com
          </a>{" "}
          is an open-source project. The source code is available on{" "}
          <a
            className="text-secondaryDark hover:text-primaryDark"
            href="https://github.com/danimelchor/website/tree/main"
          >
            GitHub
          </a>
          . Feel free to use the code /ask me any questions if you want to.
        </p>
      </div>
    </div>
  );
}
