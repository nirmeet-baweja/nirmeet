import Container from "./Container";

export default function Hero() {
  return (
    <Container id="about">
        <div className="mx-auto max-w-2xl">
          <div className=" flex flex-col text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Hi! I am Nirmeet a Web Developer And Product Designer
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Want to create something interesting let's chat.
            </p>
            <img
              src={`${process.env.PUBLIC_URL}/logo192.png`}
              alt=""
              className="self-center"
            />
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contact
              </a>
              <a
                href="#projects"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Projects <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
    </Container>
  );
}
