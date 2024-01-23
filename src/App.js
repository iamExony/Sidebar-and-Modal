import React, { useState } from 'react'
import {data} from './data'
import { HiChevronDoubleRight } from "react-icons/hi";

const Items = ({tabs}) =>{

return <> {tabs.map((list, index) => (
      <div key={index} {...list} className='my-12 text-blue-950 md:my-0 md:w-[70%]'>
        {index === 0 && <div className='flex flex-col gap-8'>
        <section className='flex flex-col items-start gap-2'>
        <h1 className='text-3xl'>{list.title}</h1>
        <h2 className='bg-gray-300 inline-block px-2 rounded text-lg'>{list.caption}</h2>
        <h3 className='tracking-wider'>{list.date}</h3>
        </section>
        <ul className='flex flex-col gap-4'>
          {Object.entries(list.content).map(([key, value]) => (
            <li key={key} className='flex items-center gap-6'><HiChevronDoubleRight className='text-8xl text-[#26ac9a] md:text-4xl lg:text-4xl'/>{value}</li>
          
          ))}
        </ul>
        </div>}
      </div>
    ))}
    </> 
}

const App = () => {
const [tabs, setTabs] = useState(data)
const [isSelected, setIsSelected] = useState(1)



const filterItem = (items) =>{
  switch(items){
    case 'tommy':
      setTabs(data.filter((items, index) => index ===0))
      setIsSelected(1)
      break
    case 'bigdrop':
      setTabs(data.filter((items, index) => index ===1))
      setIsSelected(2)
      break
    case 'cuker':
      setTabs(data.filter((items, index) => index ===2))
      setIsSelected(3)
      break
    default:
      setTabs(data.filter((item, index) => index ===0))
      
      
  }
}

  return (
    <>
    <div className='w-screen h-auto flex flex-col items-center justify-between'>
  <section className='w-[85%] my-20 flex flex-col items-center md:flex-row md:items-start'>
    {/* TABS */}
    <header className='flex items-center gap-4 font-semibold md:flex-col md:items-start md:max-w-64 '>
      <button onClick={()=> filterItem('tommy') }  className={`cursor-pointer px-16 ${isSelected === 1 ? 'text-[#2dd4bf] border-b-2 md:border-b-0 md:border-l-2 border-[#2dd4bf]':'bg-transparent'} hover:text-[#2dd4bf] hover:border-b-2 md:hover:border-b-0 md:hover:border-l-2 hover:border-[#2dd4bf]  hover:transition-all`}>TOMMY</button>
      <button onClick={()=> filterItem('bigdrop')} className={`cursor-pointer px-16 ${isSelected === 2 ? 'text-[#2dd4bf] border-b-2 md:border-b-0 md:border-l-2 border-[#2dd4bf]':'bg-transparent'} hover:text-[#2dd4bf] hover:border-b-2 md:hover:border-b-0 md:hover:border-l-2 hover:border-[#2dd4bf]  hover:transition-all`}>BIGDROP</button>
      <button onClick={()=> filterItem('cuker')} className={`cursor-pointer px-16 ${isSelected === 3 ? 'text-[#2dd4bf] border-b-2 md:border-b-0 md:border-l-2 border-[#2dd4bf]':'bg-transparent'} hover:text-[#2dd4bf] hover:border-b-2 md:hover:border-b-0 md:hover:border-l-2 hover:border-[#2dd4bf]  hover:transition-all`}>CUKER</button>

    </header>
    {/* ========= */}
    <Items tabs = {tabs} />
  </section>
</div>

    </>
  )
}

export default App