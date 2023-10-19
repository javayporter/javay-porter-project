import "../stylesheets/ExperienceCard.css";
import Badge from "../components/Badge.jsx";

export const ExperienceCard = ({
  title,
  company,
  location,
  dates,
  description,
}) => {
  const workExperience = [
    {
      id: 1,
      title: "Junior Software Engineer - Angi",
      company: "Angi",
      location: "Denver, Colorado",
      dates: "JAN 2022 - DEC 2022",
      description:
        "Collaborated with cross-functinal team to define features and build power and easy-to-use products. Developed web applications and tools to streamline and improve company processes.",
      skills: ["React", "Javascript", "Typescript", "Ruby", "Python", "Java"],
    },
    {
      id: 2,
      title: "Quality Engineer - Angie's List",
      company: "Angie's List",
      location: "Denver, Colorado",
      dates: "OCT 2019 - DEC 2021",
      description:
        "Created, maintained, and executed manual and automated test cases for requirement validation, integration, regression, and usability testing.",
      skills: ["Python", "Java", "Gherkin", "SQL"],
    },
    {
      id: 3,
      title: "Senior Technical Support Specialist - mHelpDesk",
      company: "mHelpDesk",
      location: "Fairfax, Virginia",
      dates: "MAR 2017 - OCT 2019",
      description:
        "Leveraged tools, resources, and company produceres to lead a team in addressing, diagnosing, and resolving technical issues.",
      skills: ["HTML", "CSS", "SCSS", "Javascript"],
    },
  ];
  const content = workExperience.map((job) => (
    <div className="card__container" key={job.id}>
      <div className="work-details">
        <div className="job-dates">{job.dates}</div>
        <div className="job-details">
          <h6>{job.title}</h6>
          <p className="spacing">{job.description}</p>
          <div className="programming-lang-skills">
            {job.skills.map((skill, index) => {
              return (
                <div className="nested-programming" key={index}>
                  <Badge text={skill} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div id="experience" className="experience__">
      {content}
    </div>
  );
};
