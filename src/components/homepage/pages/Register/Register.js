import DocumentTitle from "react-document-title";

import "@/css/Global.css";

import logo from "@/assets/img/register__logo.svg";
import bg__logo from "@/assets/img/register__bg-logo.svg";

function Register() {
  return (
    <div className="split__wrapper">
      <DocumentTitle title="Register"></DocumentTitle>
      <div className="split__left">
        <img src={logo} alt="logo" className="split__logo" />
        <img src={bg__logo} alt="logo background" className="split__bg-logo" />
      </div>
      <div className="split__right">
        <form className="form__main">
          <input
            type="email"
            className="form__input form__active"
            placeholder="Email"
          />
          <input type="email" className="form__input" placeholder="Förnamn" />
          <input type="email" className="form__input" placeholder="Efternamn" />
          <input type="email" className="form__input" placeholder="Stad" />
          <input type="email" className="form__input" placeholder="Lösenord" />
          <input
            type="email"
            className="form__input"
            placeholder="Repetera lösenord"
          />
          <div className="form__btn-wrapper">
            <button type="submit" className="form__button">
              Registrera dig
            </button>
            <p>Har du redan ett konto? Logga in</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
