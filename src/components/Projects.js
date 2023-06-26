import Project from "./Project";

const projects = [
  {
    id: 1,
    title: "Say Your Pain",
    href: "https://nirmeet-baweja.github.io/say-your-pain/",
    description:
      "An app that translates different pain sensations into multiple other languages to enable are non-native english speakers to describe their pain.",
    imageUrl: "/assets/projects/say-your-pain.png",
  },
  {
    id: 1,
    title: "Sudoku Solver",
    href: "https://nirmeet-baweja.github.io/sudoku-solver/",
    description:
      "If you ever get stuck at a game of sudoku you can use this app to solve it. The algorithm uses recursion to find the solution.",
    imageUrl: "/assets/projects/sudoku-solver.png",
  },
  {
    id: 1,
    title: "TV Show Library",
    href: "https://nirmeet-baweja.github.io/tv-show-dom-project/",
    description:
      "Get all the information about favourite TV shows at one place. A project build on DOM manipulation in vanilla JavaScript. The TV show data is fetched from a REST API.",
    imageUrl: "/assets/projects/tv-show-dom-project.png",
  },
  {
    id: 1,
    title: "Attendance Tracker Application",
    href: "https://github.com/nirmeet-baweja/access-denied",
    description:
      "A full stack application built for Code Your Future to enable volunteers to track trainees' attendance and attentiveness in class.",
    imageUrl: "/assets/projects/access-denied.png",
  },
  {
    id: 1,
    title: "Coding Session Sign-up",
    href: "https://github.com/nirmeet-baweja/capgemini-homework-club-backend",
    description:
      "An application to provide a common platform between Capgemini Volunteers and Code Your Future (CYF) students to sign-up for coding sessions. This app has three types of users - Admin, Volunteer and Student. Admins have the responsibility to set-up the coding sessions and assign the topics for the session. Volunteers join the session to provide their expertise and help students with the doubts they are facing. Students sign-up to sessions to get help from volunteers with their ongoing projects, doubts or classes.",
    imageUrl: "/assets/projects/homework-club.png",
  },
  // More projects...
];

export default function Projects() {
  return (
    <div className="bg-white py-24 sm:py-32" id="projects">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => {
            return <Project project={project} key={project.title} />;
          })}
        </div>
      </div>
    </div>
  );
}
