import React from "react"
import Review from './Review'
import { useState } from "react"
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";


const Reviews = ({reviews}) => {
  const [selectedItem, setSelectedItem] = useState(0)
  
  const handleNext = () =>{
    setSelectedItem((prevItem) => (prevItem + 1) %reviews.length)
  }
  const handlePrevious = () =>{
    setSelectedItem((prevItem) => (prevItem + reviews.length - 1) %reviews.length)
  }
  const handleSuprise = () =>{
    setSelectedItem((prevItem) => (prevItem + 1) %reviews.length)
  }



  return (
    <>
   
    <div className='w-[90%] mx-auto md:w-2/5 bg-white my-24 p-12 shadow-md rounded-md hover:shadow-xl'>
       
          {reviews.map((rev, index) => {
        
        return <Review rev={rev} key={index}  isSelected={selectedItem ===index}/>
        })}

{/* Buttons */}
<section className="flex flex-col items-center gap-4">
  <article className="flex items-center justify-around gap-16">
    <button className="text-blue-900 font-semibold hover:text-blue-500"  onClick={handlePrevious}><FaChevronLeft /></button>
    <button className="text-blue-900 font-semibold hover:text-blue-500" onClick={handleNext}><FaChevronRight /> </button>
    </article>
    <button className="bg-blue-100 w-24 text-blue-900" onClick={handleSuprise}>Suprise Me</button>
    </section>
    </div>
    </>
  )
}

export default Reviews