import React from "react";
import Css from "../img/css.svg";
import Html from "../img/html.svg";
import Java from "../img/javascript.svg";
import Npm from "../img/npmjs.svg";
import Reactjs from "../img/react.svg";
import Tailwind from '../img/tailwind.svg';
import Next from "../img/next.svg";
import Material from "../img/material.svg";
import Man2 from "../img/Man2.png";

function Technologies() {
  const skills = ['JavaScript (ES6+)', 'Express.js', 'Node.js', 'React', 'Next.js',"AWS"," Docker ","Git Github","Mongodb"];

  return (

    <div className="technology" id="technology">
      <div className="t">
        <h1 class=" name name-technology">
          Technologies
        </h1>
        {/* <ul className="showcase">

          <li> <img className="tech-icon " src={Css} alt="icons" />
            <p>Css</p>
          </li>

          <li>
            <img className="tech-icon " src={Html} alt="icons" />
            <p>Html</p>
          </li>
          <li>
            <img className="tech-icon " src={Java} alt="icons" />
            <p>Javascript</p>
          </li>

          <li className="remove">
            <img className="tech-icon  " src={Tailwind} alt="icons" />
            <p>Tailwind</p>
          </li>
        </ul>
        <ul className="showcase2">
          <li>

            <img className="tech-icon " style={{ marginRight: "10px" }} src={Next} alt="icons" />

            <p>Next</p>
          </li>
          <li>
            <img className="tech-icon " src={Reactjs} alt="icons" />
            <p>Reactjs</p>
          </li>
          <li>
            <img className="tech-icon " style={{ margin: "0 5px" }} src={Material} alt="icons" />
            <p>Material</p>
          </li>
          <li className="remove">
            <img className="tech-icon  " src={Npm} alt="icons" />
            <p className="npm">Npm</p>
          </li>
        </ul> */}

        <p className="font-spaceFont flex mt-10 mb-4 text-xl text-left">Here are a few technologies I’ve been working :</p>
        <ul className="grid grid-cols-2 gap-3 list-none ">
          {skills && skills.map((skill, i) => <li className="relative font-spaceFont mb-[10px] opacity-80 text-lg pl-4 before:content-['▹'] before:text-[#ffa51d] before:text-lg before:mt-2 before:absolute before:left-0 before:leading-3" key={i}>{skill}</li>)}
        </ul>
      </div>
      
        

      <div className="man">
        <img src={Man2} className="man2" alt="Man2" />
      </div>
    </div>

  )
}
export default Technologies;


