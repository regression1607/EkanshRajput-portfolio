import React from 'react'
import Icon from '../icon/icon'
const Card = (props) => {
  return (
    <div className={`flex flex-col h-full justify-between ${props.dark?"bg-gray-200":'bg-slate-800'} p-4 rounded-lg cursor-pointer animate-[all_1s_ease-in] transition-transform hover:-translate-y-2`}>
      <header>
      <div className='flex justify-between items-center mb-4'>
          <div  className=" w-[40px] h-[40px] text-[#ffa51d]">
          <Icon name="Folder" />
        </div>
        <div className='flex items-center gap-4'>
            <a className=" w-[25px] h-[25px] hover:text-[#ffa51d]" href={props.github} aria-label="GitHub Link" target="_blank" rel="noreferrer">
          <Icon name="GitHub" />
        </a>
        <a
              className=" w-[25px] h-[25px] hover:text-[#ffa51d]"
          href={props.link}
          aria-label="External Link"
          target="_blank"
          rel="noreferrer">
          <Icon name="External" />
        </a>
        </div>

      </div>
        <div className='hover:text-[#ffa51d]'>
          <h1 className='text-xl font-bold mb-2  animate-[all_1s_ease-in]'>{props.title}</h1>
          <h1 className={`text-base ${props.dark ? "text-black" : 'text-gray-300'} opacity-80`}>{props.description}</h1>
      </div>

      </header>
        <footer className='mt-4'>
          {props.tech && (
          <ul className={`flex gap-4 items-end  ${props.dark ? "text-black" : 'text-gray-300'}  opacity-80 flex-grow flex-wrap list-none`}>
              {props.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          )}
        </footer>

    </div>
  )
}

export default Card