import React from "react"
import { FaQuoteLeft } from "react-icons/fa";

const Review = ({rev, isSelected}) => {
  const {image, name, desig, content} = rev
  if(!isSelected){
    return null
  }
       
  return (
    <>
    <section className="flex flex-col items-center gap-1">
    <div className="w-32 h-32 relative">
    <img src={image} alt={name} className="w-32 h-32  object-cover rounded-full z-40 absolute"/>
    <div className="absolute -top-2 left-3 bg-blue-600 w-32 h-32 object-cover rounded-full z-30 "></div>
    <div className="absolute top-3 -left-2 bg-blue-600 w-8 h-8 object-cover rounded-full z-50 flex items-center justify-center text-white"><FaQuoteLeft /></div>
    </div>
    <h1 className="text-2xl">{name}</h1>
    <h1 className="text-blue-600 font-semibold text-sm">{desig}</h1>
    <p className="text-center text-md pb-8">{content}</p>
    </section>
    </>
  )
}

export default Review