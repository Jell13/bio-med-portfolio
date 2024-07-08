import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='h-full w-full md:px-32 px-12'>
      <div className='h-full mt-20 flex md:flex-row justify-center flex-col gap-8 pb-10'>
        {/* <div className=' border-gray-800 border-2 rounded-xl p-3'>
          <img className='border' src={"/flag.jpg"} alt='flag'/>
        </div> */}
        <div>
          <img className='border-gray-800 border-2 rounded-2xl p-3 w-[550px]' src={"/flag.jpg"} alt='flag'/>
        </div>
        <div className='md:w-[50%]'>
          <h3 className='font-medium text-3xl mb-6'>About Me</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam inventore, similique necessitatibus blanditiis nobis fuga voluptatum quam molestias consectetur repudiandae enim eaque soluta itaque quasi, tempore expedita. Exercitationem, fugiat doloribus.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quasi autem dolorem delectus modi omnis fugiat numquam voluptates? Quasi vitae blanditiis debitis voluptatum ab odit optio obcaecati tempora quo! Accusantium.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam esse quisquam quaerat dolorem aspernatur mollitia. Quaerat ex ad magni illum tempora in, reprehenderit soluta voluptatibus eligendi quia expedita ipsam enim.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut beatae atque amet consequuntur et molestiae esse excepturi libero facilis, reiciendis unde quod deleniti non consectetur, distinctio saepe obcaecati quaerat nostrum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut beatae atque amet consequuntur et molestiae esse excepturi libero facilis, reiciendis unde quod deleniti non consectetur, distinctio saepe obcaecati quaerat nostrum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut beatae atque amet consequuntur et molestiae esse excepturi libero facilis, reiciendis unde quod deleniti non consectetur, distinctio saepe obcaecati quaerat nostrum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam inventore, similique necessitatibus blanditiis nobis fuga voluptatum quam molestias consectetur repudiandae enim eaque soluta itaque quasi, tempore expedita. Exercitationem, fugiat doloribus.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quasi autem dolorem delectus modi omnis fugiat numquam voluptates? Quasi vitae blanditiis debitis voluptatum ab odit optio obcaecati tempora quo! Accusantium.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam esse quisquam quaerat dolorem aspernatur mollitia. Quaerat ex ad magni illum tempora in, reprehenderit soluta voluptatibus eligendi quia expedita ipsam enim.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut beatae atque amet consequuntur et molestiae esse excepturi libero facilis, reiciendis unde quod deleniti non consectetur, distinctio saepe obcaecati quaerat nostrum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut beatae atque amet consequuntur et molestiae esse excepturi libero facilis, reiciendis unde quod deleniti non consectetur, distinctio saepe obcaecati quaerat nostrum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut beatae atque amet consequuntur et molestiae esse excepturi libero facilis, reiciendis unde quod deleniti non consectetur, distinctio saepe obcaecati quaerat nostrum?</p>
        </div>

      </div>
    </div>
  )
}

export default page
