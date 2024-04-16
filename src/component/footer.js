import React from "react";


function Footer (props) {
    return (
        <footer className="footer pb-4">
            <div className="footer-content">
                <h4 className="owner font-spaceFont">
                    Developed by Ekansh<br />
                    Build with Reactjs
                </h4>
            </div>

            <div className="icon cursor-pointer">
                <a href="https://www.linkedin.com/in/ekanshrajput/" className="icons-icon footer-icon" rel="noreferrer" target="_blank">
                    <img className="social footer-icon" src={props.linkedin} alt="twitter" />

                </a>
                <a href="https://github.com/regression1607" rel="noreferrer" className=" icons-icon" target="_blank">
                    <img className="social footer-icon" src={props.github} alt="twitter" />

                </a>
                <a href="https://twitter.com/EkanshRajput16" rel="noreferrer" className=" icons-icon" target="_blank" >
                    <img className="social footer-icon" src={props.twitter} alt="twitter" />

                </a>
                <a href="https://medial.app/user/ekansh-rajput-be58d8c63cdf8" rel="noreferrer" className="icons-icon " target="_blank" >
                    <img className="social" src={props.Hashnode} alt="twitter" />
                </a>
            </div>
        </footer>)
}

export default Footer;