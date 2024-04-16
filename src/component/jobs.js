import React from 'react'
import Icon from '../icon/icon';


const Jobs = () => {
  const jobs = [
    { company: "Cyberpoint Pvt Ltd", duration: "December,2023 - current", post: "Nodejs Developer", link:"https://www.linkedin.com/company/cyberpoint-pvt-ltd/mycompany/" },
    { company: "GI ventures", duration: "Oct,2022 - Oct,2023", post: "AI/Ml Trainee", link:"https://www.linkedin.com/company/giventures/" },];
  return (
    <div className='mb-12 px-2 tablet:px-12 desktop:px-20 mt-4'>
      <h1 className='name desktop:text-5xl tablet:text-2xl text-xl mb-8'>Where I’ve Worked</h1>
      <div className='flex flex-col gap-4 w-full md:w-[60%]  '>
        
        {jobs && jobs.map((job) => (
          <div className='flex justify-between items-center'>
            <div className=''>
              <h1 className=" pl-6 font-spaceFont text-2xl  relative before:content-['▹'] before:text-[#ffa51d] before:text-lg before:mt-2 before:absolute before:left-0 before:leading-3">{job.post} </h1>
              <div className='flex items-center '>
                <h1 className='pl-6 font-spaceFont text-base opacity-80'>{job.company} </h1>
                <a href={job.link} target="_blank" rel="noreferrer" className='w-4 h-4 flex justify-center items-center ml-[2px] cursor-pointer animate-[all_1s_ease-in] transition-transform hover:translate-x-[2px]'>
                  <Icon className='w-2' name='Arrow' />
                </a>
              </div>
            </div>
            <p className='font-spaceFont text-base opacity-80'>{job.duration} </p>
          </div>
        )) }
      </div>
    </div>
  )
}

export default Jobs