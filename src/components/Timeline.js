import TimelineItem from "./TimelineItem";

const career = [
  {
    jobTitle: "Software Engineer",
    startDate: "04/Feb/2023",
    endDate: "06/Feb/2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.",
  },
  {
    jobTitle: "Software Engineer",
    startDate: "04/Feb/2023",
    endDate: "06/Feb/2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.",
  },
  {
    jobTitle: "Software Engineer",
    startDate: "04/Feb/2023",
    endDate: "06/Feb/2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.",
  },
];

export default function Timeline() {
  return (
    <div className="m-auto lg:w-1/2">
      <h3 className="mb-6 ml-3 text-2xl font-bold text-neutral-700 dark:text-neutral-300">
        Career Progression
      </h3>

      <ol className="border-l-2 border-indigo-100 m-8">
        {career.map((job) => (
          <TimelineItem job={job} />
        ))}
      </ol>
    </div>
  );
}
