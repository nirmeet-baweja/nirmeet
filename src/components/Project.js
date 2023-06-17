export default function Project({ project }) {
  return (
    <article
      key={project.id}
      className="flex max-w-xl flex-col items-start justify-between rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
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
      <div className="relative p-8">
        <button
          type="button"
          className="inline-block rounded bg-indigo px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-gray-600 shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-indigo-600 hover:text-white hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-indigo-600 focus:text-white focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-indigo-700 active:text-white active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Preview
        </button>
        <button
          type="button"
          className="inline-block rounded border-2 border-indigo px-4 pb-[3px] pt-[4px] text-xs font-medium uppercase leading-normal text-gray-600 transition duration-150 ease-in-out hover:border-indigo-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-indigo-600 focus:border-indigo-600 focus:text-indigo-600 focus:outline-none focus:ring-0 active:border-indigo-700 active:text-indigo-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          data-te-ripple-init
        >
          See demo
        </button>
      </div>
    </article>
  );
}
