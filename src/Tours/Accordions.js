import React from 'react'
import Accord from './Accord'


const Accordions = ({items}) => {
  return (
    <>
    <section className='w-[90%] md:w-3/5 bg-white shadow-lg rounded-md p-12 mx-auto my-24'>
    
    <h1 className='text-gray-700 text-6xl text-center capitalize mb-12'>questions</h1>
    {items.map((item) => {
    return <>
    <section className='border-2 border-gray-200 rounded-md my-8 shadow-lg'>
    <Accord items={item} {...item}/>
    </section>
    </> 
    })}
    </section>
    
    </>
    
  )
}

export default Accordions