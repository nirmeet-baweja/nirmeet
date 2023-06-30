import Container from "./Container";
import TimelineItem from "./TimelineItem";

const career = [
  {
    jobTitle: "Full Stack Instructor",
    startDate: "May/2022",
    endDate: "Current",
    description: [
      "Deliver engaging Full Stack development training programs to students of varying technical backgrounds and skill levels.",
      "Develop a variety of training materials, including presentations, lectures, hands-on exercises, and other learning resources.",
      "Provide one-on-one support and guidance to students throughout their learning journey.",
      "Evaluate student performance and provided feedback on their progress, strengths, and areas for improvement.",
      "Collaborate with other instructors and subject matter experts to create and refine training materials.",
    ],
    company: {
      name: "edX (2U Inc.)",
      href: "https://www.edx.org/",
      logoUrl: "/assets/edx-logo.svg",
    },
  },
  {
    jobTitle: "Program Manager",
    startDate: "Jan/2023",
    endDate: "Current",
    description: [
      "Manage Full Stack programs, including curriculum development, instructor recruitment, student admissions, and program delivery.",
      "Develop engaging training materials, including presentations, lectures, hands-on exercises, and other learning resources.",
      "Coordinate with instructors and subject matter experts to ensure that training materials and curriculum are up-to-date and aligned with industry standards.",
      "Facilitate communication and collaboration among students, instructors, and stakeholders to ensure program success.",
      "Conduct regular evaluations of student performance and provided feedback on their progress, strengths, and areas for improvement.",
      "Monitor and report on program metrics, including student satisfaction, graduation rates, and job placement rates.",
    ],
    company: {
      name: "Code Your Future",
      href: "https://codeyourfuture.io/",
      logoUrl: "/assets/cyf-logo.svg",
    },
  },
  {
    jobTitle: "Full Stack Engineer",
    startDate: "Dec/2021",
    endDate: "May/2022",
    description: [
      "Led the management and development of a decision engine to automate the suitability and eligibility assessments in the CodeYourFuture application process using AI based knowledge map.",
      "Optimised the student selection procedure which will save hundreds of hours worth of volunteer time.",
    ],
    company: {
      name: "Code Your Future",
      href: "https://codeyourfuture.io/",
      logoUrl: "/assets/cyf-logo.svg",
    },
  },
  {
    jobTitle: "Module Manager & Teaching Assistant",
    startDate: "Oct/2021",
    endDate: "Current",
    description: [
      "Lead the JavaScript Module and work with other module managers to keep the syllabus up-to-date.",
      "Review the syllabus based on students' as well as volunteers' feedback.",
      "Tutor and mentor students during lessons, explain programming concepts and help them with projects.",
    ],
    company: {
      name: "Code Your Future",
      href: "#",
      logoUrl: "/assets/cyf-logo.svg",
    },
  },
  {
    jobTitle: "Embedded Software Engineer",
    startDate: "Sep/2018",
    endDate: "Sep/2019",
    description: [
      "Led the production of world's first fully modular and bidirectional converter with an incredible compactness.",
      "Achieved high efficiency converter (93%) by optimising the system control sequence. And high efficiency directly translates to huge amounts saved on electricity bills.",
    ],
    company: {
      name: "CE+T Power",
      href: "https://www.cet-power.com/en/",
      logoUrl: "/assets/cet-power-logo.svg",
    },
  },
  {
    jobTitle: "Electronics Research Engineer",
    startDate: "Oct/2017",
    endDate: "Sep/2018",
    description: [
      "Realisation and optimisation of a 350VA DC/DC converter : The project was to realise a compact, low cost and high efficiency DC/DC converter to be used in the upcoming company products.",
    ],
    company: {
      name: "CE+T Power",
      href: "https://www.cet-power.com/en/about/",
      logoUrl: "/assets/cet-power-logo.svg",
    },
  },
];

export default function Timeline() {
  return (
    <Container id="career" heading="Career Progression">
      <div className="border-t border-gray-200 mx-auto mt-10">
        <ol className="border-l-2 border-indigo-100 m-8">
          {career.map((job) => (
            <TimelineItem job={job} key={job.jobTitle} />
          ))}
        </ol>
      </div>
    </Container>
  );
}
