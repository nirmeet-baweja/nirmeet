/* eslint-disable no-loop-func */
import { useState, useEffect } from "react";
import Container from "./Container";
import Project from "./Project";
import projects from "../data/projects.json";

export default function Projects() {
  const [githubProjects, setGithubProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      let requestUrl = "https://api.github.com/users/nirmeet-baweja/repos";
      const projects = [];

      while (1) {
        // console.log("In the while loop");
        // console.log(requestUrl);
        const response = await fetch(requestUrl);
        const data = await response.json();
        projects.push(...data);
        const headersLink = response.headers.get("link");
        const links = headersLink.split(" ");
        // console.log(links);
        const nextLinkIndex = links.indexOf(`rel="next",`) - 1;
        // console.log(nextLinkIndex);
        if (nextLinkIndex < 0) {
          break;
        }
        requestUrl = links[nextLinkIndex].slice(1, -2);
      }

      const cleanedProjects = projects.map((project) => {
        return {
          id: project.id,
          title: project.name,
          githubUrl: project.html_url,
          deployUrl: project.homepage ? project.homepage : "",
          description: project.description,
        };
      });
      setGithubProjects(cleanedProjects);
      console.log("projects:");
      console.log(cleanedProjects);
    };

    fetchProjects();
  }, []);

  return (
    <Container id="projects" heading="Projects">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:pt-16 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {githubProjects.map((project) => {
          return <Project project={project} key={project.title} />;
        })}
      </div>
    </Container>
  );
}
