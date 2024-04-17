import React from 'react'
import { TiThMenu } from "react-icons/ti";
import {  useGlobalContext } from './Context';


const Home = () => {
  const {OpenSidebar,OpenModal} = useGlobalContext()
 

  return (
    <section className="h-screen w-screen flex items-center justify-center">
      <button onClick={OpenSidebar} className="absolute z-30 top-0 left-0">
        <TiThMenu
          className={`text-6xl text-blue-400 animate-blink hover:rotate-90 hover:text-blue-900 ease-in-out duration-300 m-6 `}
        />
      </button>
      <section className="flex items-center justify-center ">
        <button onClick={OpenModal} className="shadow-lg hover:shadow-xl hover:bg-blue-800 bg-blue-400 px-2 rounded text-white text-md">
          Show Modal
        </button>
      </section>
    </section>
  );
}

export default Home