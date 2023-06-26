export default function TimelineItem({ job }) {
  return (
    <li>
      <div className="flex-start md:flex">
        <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="mb-10 ml-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5">
          <div className="mb-4 flex justify-between items-end">
            <p className="text-lg text-indigo-700">{job.jobTitle}</p>
            <p className="text-sm text-indigo-600">
              {`${job.startDate} - ${job.endDate}`}
            </p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            {job.company.logoUrl && (
              <img
                src={`${process.env.PUBLIC_URL}${job.company.logoUrl}`}
                alt=""
                className="h-7 bg-gray-50"
              />
            )}
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <a
                  href={job.company.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="absolute inset-0" />
                  {job.company.name}
                </a>
              </p>
            </div>
          </div>
          <div className="mb-6 text-gray-600">
            <ul className="list-disc list-outside">
              {job.description.map((descriptionPoint, index) => (
                <li key={index}>{descriptionPoint}</li>
              ))}
            </ul>
          </div>
          <div className="relative mt-8">
            <button
              type="button"
              className="inline-block rounded bg-indigo px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-gray-600 shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-indigo-600 hover:text-white hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-indigo-600 focus:text-white focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-indigo-700 active:text-white active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Preview
            </button>
            <button
              type="button"
              className="inline-block rounded border-2 border-indigo px-4 pb-[3px] pt-[4px] text-xs font-medium uppercase leading-normal text-gray-600 transition duration-150 ease-in-out hover:border-indigo-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-indigo-600 focus:border-indigo-600 focus:text-indigo-600 focus:outline-none focus:ring-0 active:border-indigo-700 active:text-indigo-700"
              data-te-ripple-init
            >
              See demo
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
