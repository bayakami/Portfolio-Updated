import "./contact.css";
import Phone from "../../img/github-brands.svg";
import Email from "../../img/email.svg";
import Address from "../../img/address.svg";

/* icons from https://fontawesome.com/license */

function Contact() {
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <a href="https://github.com/bayakami"><img src={Phone} alt="" className="c-icon" />
              My GitHub</a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              barbora.lazova@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Sheffield
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
