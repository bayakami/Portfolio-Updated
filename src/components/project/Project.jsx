import "./project.css";

const Project = ({ img, link, desc, title }) => {
  return (
    <div className="p">
      <div className="p-browser">
      </div>
      {/* <div className="desc">{desc}</div> */}
      <div className="p-div">
        <b>{title}</b>
        <br/>
        <br/>
        {desc}
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img"  />
      </a>
      </div>
      
      
    </div>
  );
};

export default Project;
