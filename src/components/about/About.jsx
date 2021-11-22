import "./about.css";
import Background from "../../img/bg-img.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Background} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Why do I like coding? 
          <br/>
          It improves my thinking - logical and analytical. I can turn an idea into a reality. It makes me more confident - I can learn how things work, understand elements behind technology faster.
        </p>
        <p className="a-desc">
          I am attending a fully remote online course at The Developer Academy right now. The course is 12 weeks long and covers full stack web development. This boot camp has given me an opportunity to develop my coding skills and improve my soft skills.
        </p>
      </div>
    </div>
  );
};

export default About;
