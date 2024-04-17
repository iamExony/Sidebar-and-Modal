import React from 'react'
import { IoClose } from "react-icons/io5";
import { navBar } from "./data";
import { Socials } from "./Socials";
import { useGlobalContext } from './Context';

const Sidebar = () => {
  const { isSidebarOpen, CloseSidebar } = useGlobalContext();
  return (
    <section className={`${isSidebarOpen ?"absolute top-0 bg-white w-full md:w-[30%] h-screen py-6 z-50":"hidden"}`}>
      <article className="flex justify-between pb-8 px-6">
        <h1 className="text-3xl font-semibold drop-shadow-md">
          Coding <span className="text-blue-400">Addict</span>
        </h1>
        <button onClick={CloseSidebar}>
          <IoClose className="text-red-800 text-4xl drop-shadow-md " />
        </button>
      </article>
      <nav className="flex flex-col">
        {navBar.map((navs) => {
          const { id, name, url } = navs;
          return (
            <div key={id} {...navs} className="text-2xl text-gray-800 block">
              <a href={url} className="px-6 py-3 block hover:bg-[#f1f5f9]">
                {name}
              </a>
            </div>
          );
        })}
      </nav>
      <article className="flex pt-44 text-3xl gap-4 justify-center items-center w-full text-blue-400 ">
        {Socials.map((socialIcon) => {
          return (
            <div {...socialIcon}>
              <h1 className="hover:text-blue-600 cursor-pointer">
                {socialIcon}
              </h1>
            </div>
          );
        })}
      </article>
    </section>
  );
}

export default Sidebar