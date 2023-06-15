import "../stylesheets/ExperienceCard.css";
const ExperienceCard = ({ title, company, location, dates, description }) => {
  const workExperience = [
    {
      id: 1,
      title: "Junior Software Engineer - Angi",
      company: "Angi",
      location: "Denver, Colorado",
      dates: "January '22 - December '22",
      description:
        "Collaborated with cross-functinal team to define features and build power and easy-to-use products. Developed web applications and tools to streamline and improve company processes.",
    },
    {
      id: 2,
      title: "Quality Engineer - Angie's List",
      company: "Angie's List",
      location: "Denver, Colorado",
      dates: "October '19 - December '21",
      description:
        "Created, maintained, and executed manual and automated test cases for requirement validation, integration, regression, and usability testing.",
    },
    {
      id: 3,
      title: "Senior Technical Support Specialist - mHelpDesk",
      company: "mHelpDesk",
      location: "Fairfax, Virginia",
      dates: "March '17 - October '19",
      description:
        "Leveraged tools, resources, and company produceres to lead a team in addressing, diagnosing, and resolving technical issues.",
    },
  ];
  const content = workExperience.map((job) => (
    <div className="card__container" key={job.id}>
      <div className="work-details">
        <div className="job-details">
          {/* <h3>{job.company}</h3> */}
          <h3>{job.title}</h3>
          <h4>{job.location}</h4>
          <h4>{job.dates}</h4>
        </div>
        <div>
          <p>{job.description}</p>
        </div>
      </div>
      <div className="programming-lang-skills">Programming skills</div>
    </div>
  ));
  return <div className="main-container">{content}</div>;
};
export default ExperienceCard;
