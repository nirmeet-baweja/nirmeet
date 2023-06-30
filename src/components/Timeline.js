import Container from "./Container";
import TimelineItem from "./TimelineItem";
import career from "../data/career.json"

export default function Timeline() {
  return (
    <Container id="career" heading="Career Progression">
      <div className="mx-auto pt-10 sm:pt-16">
        <ol className="border-l-2 border-indigo-100 m-2 sm:m-4">
          {career.map((job) => (
            <TimelineItem job={job} key={job.jobTitle} />
          ))}
        </ol>
      </div>
    </Container>
  );
}
