import "./ErrorNotice.css";
import icon__error from "@/assets/img/icons/error__white.svg";

function ErrorNotice({ err }) {
  return (
    <div className="error__outer-wrapper">
      <img
        src={icon__error}
        alt="Error icon"
        className="errornotice__icon"
      ></img>
      {err}
    </div>
  );
}

export default ErrorNotice;
