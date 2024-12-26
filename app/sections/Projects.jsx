import React from 'react'

const Projects = () => {
  return (
    <section id='projects' className='lg:px-20 px-8 py-20'>
      <div className='flex flex-col mt-5'>
        <h2 className='lg:text-[4rem] text-[2rem] font-semibold tracking-tighter'>MY PROJECTS /</h2>
        <div className='lg:grid grid-cols-12 mt-20 flex flex-col'>
          <h3 className='text-lg font-biryani col-start-6'>(Works)</h3>
        </div>
        <div className='grid grid-cols-12'>
        <div className='col-span-12 rounded-xl border-[2px] py-10 px-20 border-red-400'>
          <h3>Experience 1</h3>
        </div>
        <div className='col-span-6 col-start-1 col-end-6'>
          <h3>Experience 2</h3>
        </div>
        <div className='col-span-6 col-start-7 col-end-12'>
          <h3>Experience 2</h3>
        </div> 
      </div>
      </div>            
    </section>
  )
}

export default Projects
