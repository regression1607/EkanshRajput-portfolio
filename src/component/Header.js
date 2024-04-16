import React from "react"
import Man1 from "../img/Man1.png";

function Header(props) {
   

    function myFunction() {
        props.setShowLinks(!props.showLinks);
    }
    
    return (
        <div>
            <header className="desktop:grid-cols-[28em_1fr_1fr] items-center justify-between shadow-outline flex tablet:grid tablet:grid-cols-[1fr_2em_1fr_1fr_1em] laptop:grid-cols-[1fr_1fr_1fr_1em]  ">

                <h1 className="title "> &lt;Ekansh Rajput/&gt;</h1>

                <ul className="menu">
                    <li className="list-item"><a className="menu-item " href="#about">About</a> </li>
                    <li className="list-item"><a className="menu-item" href="#project">Project</a></li>
                    <li className="list-item"><a className="menu-item" href="#technology">Technologies</a></li>
                </ul>

                <div className={`${props.showLinks ? 'container change' : "container "}`} onClick={myFunction}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>

                <div className="icons">
                    
                    <a href="https://www.linkedin.com/in/ekanshrajput/" className="icons-icon " rel="noreferrer" target="_blank">
                        <img className=" social" src={props.linkedin} alt="linkedin" />
                    </a>

                    <a href="https://github.com/regression1607" rel="noreferrer" className="icons-icon " target="_blank">
                        <img className="social " src={props.github} alt="twitter" />
                    </a>

                    <a href="https://twitter.com/EkanshRajput16" rel="noreferrer" className="icons-icon " target="_blank" >
                        <img className="social" src={props.twitter} alt="twitter" />
                    </a>

                    <a href="https://medial.app/user/ekansh-rajput-be58d8c63cdf8/" rel="noreferrer" className="icons-icon " target="_blank" >
                        <img className="social" src={props.Hashnode} alt="twitter" />
                    </a>

                </div>

            </header>

            <div className={`${props.showLinks ? 'back-slider back-on' : "back-slider "}`}  >
                <ul className="slider">
                    <li ><a className="slider-item" href="#about">About</a> </li>
                    <li ><a className="slider-item" href="#project">Project</a></li>
                    <li ><a className="slider-item" href="#technology">Technologies</a></li>
                </ul>
            </div>

            <div className="content">
                <div className="col-1 flex flex-col gap-3">
                    <p>Hello! 👋 My name is </p>
                    <h1 className="name">Ekansh Rajput</h1>
                    <p>Software <span>Developer 😎</span> + Prompt Enginner ✨</p>
                    <a href="https://www.linkedin.com/in/ekanshrajput/" rel="noreferrer" target="_blank" >
                        <button className="btn btn-color">say hii 👋 on linkedin</button>
                    </a>
                </div>

                <div className="col-2">
                    <img className="man " src={Man1} alt="pic" />
                </div>
            </div>
        </div>
    )
}

export default Header;