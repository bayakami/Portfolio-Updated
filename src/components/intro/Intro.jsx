import "./intro.css"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello! MY name is</h2>
                    <h1 className="i-name">B Kaminskas</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Dev</div>
                            <div className="i-title-item">Web Dev</div>
                            <div className="i-title-item">Web Dev</div>
                            <div className="i-title-item">Web Dev</div>
                            <div className="i-title-item">Web Dev</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I design and develop services for customers of all sizes,
                        specializing in creating stylish, modern websites, web services and
                        online stores.
                    </p>
                </div>
            </div>
            <div className="i-right">right</div>
        </div>
    )
}

export default Intro