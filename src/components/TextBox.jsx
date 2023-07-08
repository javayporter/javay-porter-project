import "../stylesheets/TextBox.css";

const TextBox = ({header, text}) => {
    return (
        <div className="text__container">
        <div className="text__header">
        {header}
        </div>
        <div className="text__content">
        {text}
        </div>
        </div>
    )
};

TextBox.defaultProps = {
    header: "What I do",
    text: "I have 2 years experience building software for clients in multiple industries. Below is a quick overview of my technical skill sets and technologies I've worked with. Want to find out more about my experience? Check out my online resume and project portfolio."
};

export default TextBox;
