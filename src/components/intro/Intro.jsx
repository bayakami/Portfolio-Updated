import "./intro.css";
import Profile from "../../img/main.JPG";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, I'm <b>Barbora Kaminskas</b></h2>
          {/* <h1 className="i-name">Barbora Kaminskas</h1> */}
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Front End Developer</div>
              <div className="i-title-item">Back End Developer</div>
              <div className="i-title-item">UI/UX Enthusiast</div>
            </div>
          </div>
          <p className="i-desc">
            I'm a trainee web developer, currently getting trained by The Developer Academy. Check out my most recent projects below!
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"><img src={Profile} alt="" className="i-img" /></div>
        
      </div>
    </div>
  );
};

export default Intro;
