import React from 'react'

const ProjectBox = ({id, name}) => {
  return (
    <div key={id} className='col-span-6 border-[2px] border-red-400 py-20 px-5'>
        {name}
    </div>
  )
}

export default ProjectBox
