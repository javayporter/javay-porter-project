//import "../stylesheets/MainButton.scss";
const MainButton = ({ text, textColor, buttonColor }) => {
  const componentStyle = {
    color: { textColor },
    backgroundColor: { buttonColor },
  };
  return (
    <div>
      <button style={componentStyle}>{text}</button>
    </div>
  );
};
export default MainButton;
