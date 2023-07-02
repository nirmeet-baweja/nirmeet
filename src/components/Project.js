import IconLink from "./IconLink";
import GithubLogo from "./GithubLogo";
import GlobeLogo from "./GlobeLogo";

export default function Project({ project }) {
  return (
    <article
      key={project.id}
      className="flex max-w-xl flex-col items-start justify-between rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
    >
      <div className="relative justify-self-stretch self-center w-full">
        <img
          src={`${process.env.PUBLIC_URL}${project.imageUrl}`}
          alt={project.title}
          className="w-full rounded-t-lg"
        />
      </div>
      <div className="group relative p-8">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
          <span className="absolute inset-0" />
          {project.title}
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          {project.description}
        </p>
      </div>
      <div className="flex relative p-8 w-full justify-around">
        <button className="flex justify-center items-center bg-white hover:bg-indigo-400 text-gray-800 hover:text-white font-semibold py-2 px-4 border border-indigo-600 rounded shadow">
          <IconLink url={project.githubUrl} icon={GithubLogo} />
          <span>Github</span>
        </button>
        <button
          className={`flex justify-center items-center font-semibold py-2 px-4 border border-indigo-600 rounded shadow ${
            project.deployUrl
              ? " bg-white hover:bg-indigo-400 text-gray-800 hover:text-white"
              : " bg-gray-100 text-gray-500 opacity-50 cursor-not-allowed"
          }`}
        >
          <IconLink url={project.deployUrl} icon={GlobeLogo} />
          <span>Website</span>
        </button>
      </div>
    </article>
  );
}
