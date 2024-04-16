import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import Watch from "../img/wordfinder.png";
import CodeBoard from "../img/smileai.png";
import videocall from "../img/videocall.png";
import Card from './card'
function Project({ dark }) {
    let [hoveredIndex, setHoveredIndex] = useState(null);
    const projects = [
        {
            id: "1", heading: "word-finder.com", githubLink: "", pic: Watch,
            hostedLink: "https://word-finder.com/", techStack: ["Node.js", "EJS", "MongoDB"], about: "During my internship at CyberPoint Pvt Ltd, I developed a complete backend using Node.js and MongoDB for the Word-Finder project. Additionally, I created a CMS system in Node.js for seamless admin and user tracking."
        },
        {
            id: "2", heading: "Simile.AI Vision ", githubLink: "https://github.com/regression1607/dental-detection/tree/main/DentalXrayAI", pic: CodeBoard,
            hostedLink: "", techStack: ["Python", "Flask", "Tailwindcss", "Node.js"], about: "Smile AI is my final year project, a dental detection system designed to identify dental restorations with precision."
        },
        {
            id: "3", heading: "Random video call generator", githubLink: "https://github.com/regression1607/Random-VideoCall-Room", pic: videocall,
            hostedLink: "https://random-video-call-room-client.vercel.app/", techStack: ["Next.js", "Node.js", "Daily.co"], about: "This project consists of a client-side Next.js app and a server-side Node.js app for creating private video call rooms.🚀 Features :\nCreate private video call rooms\nConnect with random users\nEnjoy secure and private conversations"
        }
    ]

    const projectLess = [
        {
            id: "1", title: "Airbnb replica", github: "https://github.com/regression1607/Airbnb-clone",
            link: "/", tech: ["Nodejs", "Tailwindcss" ,"MOngoDB"], description: "I developed an Airbnb replica using Node.js and MongoDB, showcasing my skills in full-stack web development."
        }
        , { id: "2", title: 'Generate Random Funny Joke', github: "https://github.com/regression1607/Random_jokes", link: "https://d0a165d4-b787-478f-9dbf-a3a3d1febe3d-00-3u4qz2cb97rmn.worf.replit.dev/", description: "Created a random joke generator as part of a web application using HTML, CSS, and JavaScript. Integrated a third-party API to fetch jokes dynamically, providing users with endless entertainment and laughter at the click of a button.", tech: ["HTML", "JS", "CSS"] }
        , { id: "3", title: 'Siman Game', github: "https://github.com/regression1607/siman_game", link: "https://c39be12d-ce24-43ad-9080-a55b17899ac8-00-2ru2kcttvpu6s.janeway.replit.dev/", description: "Designed and implemented a Simon game using HTML, CSS, and JavaScript. This interactive web application challenges users' memory skills as they attempt to replicate increasingly complex sequences of colors and sounds.", tech: ["HTML", "Tailwind", "JS"] }
    ]
    return (

        <div className="project" id="project">
            <h1 className="name">Projects</h1>
            <div className="grid   grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10 ">
                {projects.map((project, idx) => (
                    <div
                        key={project?.id}
                        className="relative group  block p-2 h-full w-full cursor-pointer"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <AnimatePresence>
                            {hoveredIndex === idx && (
                                <motion.span
                                    className={`absolute inset-0 h-full w-full ${dark ? "bg-gray-200" : "bg-slate-800/[0.8]"} block  rounded-3xl`}
                                    layoutId="hoverBackground" // required for the background to follow
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { duration: 0.15 },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: { duration: 0.15, delay: 0.2 },
                                    }}
                                />
                            )}
                        </AnimatePresence>
                        <div className={`rounded-2xl h-full w-full  overflow-hidden ${dark ? "bg-gray-200" : "bg-gradient-to-br from-slate-800 to-slate-800/[0.2]"}  border border-transparent ${dark ? "group-hover:border-gray-500 border-opacity-50" : "group-hover:border-slate-700"} relative z-50`}>
                            <div className="relative h-full z-50">

                                <div className="cursor-pointer flex flex-col h-full justify-between  gap-3 ">
                                    <header className='flex flex-col justify-between'>
                                        <img style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} src={project.pic} className="project-pic" alt="project-pic" />

                                        <div className='flex flex-col justify-center items-center gap-2 my-2'>
                                            <h1 className={`text-center ${dark ? "text-black" : 'text-[#9BC9E3]'}  text-xl`}>{project.heading}</h1>
                                            <div style={{ width: "3em", height: "3px", backgroundColor: "orange", }}>
                                            </div>
                                        </div>

                                        <p className={`text-base font-inter ${dark ? "text-black" : 'text-gray-300'} opacity-80 mx-4`}>
                                            {project.about}
                                        </p>
                                    </header>

                                    <footer className='px-2'>
                                        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                                            {project.techStack?.map((db) => (
                                                <p className={`${dark ? "text-black opacity-80" : 'text-[#D8BFBE]'}`}>{db}</p>
                                            ))}
                                        </div>
                                        <nav className='mt-6 flex justify-center'>
                                            <ul className='flex w-[80%] justify-between px-4 mb-4'>
                                                {project.githubLink &&
                                                    <li className='flex justify-center items-center'>
                                                        <a href={project.githubLink} target="_blank">Code
                                                            <span></span><span></span><span></span><span></span>
                                                        </a>
                                                    </li>
                                                }
                                                {project.hostedLink &&
                                                    <li className='flex justify-center items-center'>
                                                        <a href={project.hostedLink} target="_blank">Live
                                                            <span></span><span></span><span></span><span></span>
                                                        </a>
                                                    </li>
                                                }
                                            </ul>
                                        </nav>
                                    </footer>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h1 className='desktop:text-3xl tablet:text-xl text-base font-spaceFont text-center mt-16'>Other Noteworthy Projects</h1>
            <div className='grid gap-4  grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10 max-w-[1100px] mx-auto'>

                {projectLess.map((project) => (
                    <Card dark={dark} key={project.id} title={project.title} description={project.description} tech={project.tech} github={project.github} link={project.link} />
                ))}
            </div>
        </div>
    )
}
export default Project;
