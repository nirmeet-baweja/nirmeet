import Container from "./Container";
import Project from "./Project";
import projects from "../data/projects.json";

export default function Projects() {
  return (
    <Container id="projects" heading="Projects">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:pt-16 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {projects.map((project) => {
          return <Project project={project} key={project.title} />;
        })}
      </div>
    </Container>
  );
}
