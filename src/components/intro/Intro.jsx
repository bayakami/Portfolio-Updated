import "./intro.css"
import Profile from "../../img/profile-modified.png"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello! My name is</h2>
                    <h1 className="i-name">B Kaminskas</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Web Dev</div>
                            <div className="i-title-item">Web Dev</div>
                            <div className="i-title-item">Web Dev</div>
                            <div className="i-title-item">Web Dev</div>
                        </div>
                    </div>
                    <p className="i-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                </div>
                
                
            </div>
            <div className="i-right">
            <div className="i-bg"></div>
            <img src={Profile} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro