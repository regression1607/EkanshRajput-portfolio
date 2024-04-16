import React, { useState, useRef, useEffect } from "react";
import Header from "./component/Header";
import About from "./component/About";
import Project from "./component/Project";
import Technologies from "./component/Technologies";
import Footer from "./component/footer";
import Moon from "./moon.png";
import Sun from "./sun.svg";
import Linkedin from "./iconBlack/linkedin-2.svg";
import Twitter from "./iconBlack/twitter.svg";
import Github from "./iconBlack/github.svg";
import Hashnode from "./iconBlack/hashnode.svg";
import hashnode from "./iconWhite/hashnode.svg";
import Link from "./iconWhite/linkedin-2.svg";
import Twitt from "./iconWhite/twitter.svg";
import Git from "./iconWhite/github.svg";
import Cassette from "./img/cassette.png"
import Sound from "./img/3i.mp3"
import Click1 from "./img/click1.mp3"
import useSound from 'use-sound';
import Jobs from "./component/jobs";
import "./app.css"


function App() {

  const [onClick, setClick] = useState(0);
  const [play] = useSound(Click1);
  function toggle() {
    setClick(!onClick);
  }
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className={`${showLinks && "h-screen overflow-hidden"}`} >
        <div className={`${onClick ? 'background-light' : 'background'}`}>
          <img className="toggle" onClick={() => { toggle();play() }} src={`${onClick ? Moon : Sun}`} alt="sun" />


          <Header
            showLinks={showLinks}
            setShowLinks={setShowLinks}
            linkedin={`${onClick ? Linkedin : Link}`}
            github={`${onClick ? Github : Git}`}
            twitter={`${onClick ? Twitter : Twitt}`}
            Hashnode={`${onClick ? Hashnode : hashnode}`}
          />

        <div className="max-w-[1380px] mx-auto">
          <About />
          <Technologies />
          <Jobs />
            
        
          <Project dark={onClick} />
        </div>

          <Footer
            linkedin={`${onClick ? Linkedin : Link}`}
            github={`${onClick ? Github : Git}`}
            twitter={`${onClick ? Twitter : Twitt}`}
            Hashnode={`${onClick ? Hashnode : hashnode}`}
          />
      </div>
    </div>
  )
}
export default App;
