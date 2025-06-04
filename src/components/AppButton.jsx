import style from "./AppButton.module.css";

const AppButton = ({ type, text }) => {
  return <button className={`${style.button} ${type}`}>{text}</button>;
};

export default AppButton;
