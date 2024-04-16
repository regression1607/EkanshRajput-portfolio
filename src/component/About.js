import React from "react";
import Notepad from "../img/Notepad.png";


function About() {
    return (
        <div className="about" id="about">
            <div className="about-content">
                <h1 className="name"> about me</h1>
                <p className="font-spaceFont opacity-80 text-sm tablet:text-lg " >I'm a 4nd year under graduate student who is enthusiastic about tech. First and foremost, I love writing code. I have been obsessed with the idea of using software to solve practical problems. This passion carried me through my education at my university. I studied new languages and algorithms and there is much yet to learn.

                    <br />
                    <br />
                </p>

            </div>
            <div className="noteicon">
                <img src={Notepad} className="notepad" alt="notepad" />
            </div>
        </div>
    )
}
export default About;