import React from 'react'
import ProjectBox from '../components/ProjectBox'

const Projects = () => {

  const projects = [
    {
      id: 2,
      name: "Meducate Clinica Tepati"
    },
    {
      id: 3,
      name: "Engineering Dean Challenge"
    },
    {
      id: 4,
      name: "Sandia Design Comp"
    },
    {
      id: 5,
      name: "T Prep Project Elev Cart"
    },
    {
      id: 6,
      name: "Flag Alert"
    }
  ]
  return (
    <section id='projects' className='lg:px-20 px-8 py-20'>
      <div className='flex flex-col mt-5'>
        <h2 className='lg:text-[4rem] text-[2rem] font-semibold tracking-tighter'>MY PROJECTS /</h2>
        <div className='mt-8 h-[2px] bg-black mb-8'/>
        <div className='grid grid-cols-12'>
          <div className='col-span-12 flex flex-col py-48 border-[2px] border-red-400 px-5 rounded-xl'>
            <h3 className='font-biryani'>BMES Makeathon</h3>
          </div>
          <div className='lg:grid grid-cols-12 col-span-12 gap-10 mt-10 flex flex-col'>
            {projects.map(({id, name}) => (
              <ProjectBox key={id} id={id} name={name}/>
            ))}
          </div>
        </div>
      </div>            
    </section>
  )
}

export default Projects
