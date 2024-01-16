import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";

const Accord = ({title, content}) => {
    const [viewBtn, setViewBtn] = useState(false)

  return (
    <>
    <section className='flex flex-col p-4'>
    <header className='flex justify-between'>
    <h1 className='text-gray-700 text-xl font-semibold'>{title}</h1>
    <button className='w-8 h-8 text-white bg-[#164e63] rounded-full px-2' onClick={()=>setViewBtn(!viewBtn)}>
    {viewBtn ? <RiSubtractFill /> : <IoMdAdd />}
    </button>
    </header>
    {viewBtn ? <p className='text-gray-500 leading-8 pr-4 pt-4'>{content}</p> : ''}
    </section>

    </>
  )
}

export default Accord