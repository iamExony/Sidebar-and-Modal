import React, { useState } from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import {navBar}  from "./data"


const App = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header className="h-20 bg-white shadow-md text-lg">
        <article className="flex items-center justify-between md:mx-24 mx-8 pt-4">
          <h1 className="text-2xl font-semibold drop-shadow-md w-48">
            Coding <span className="text-blue-400">Addict</span>
          </h1>
            <nav className="flex mt-4 md:mt-0">
              <span className='md:flex hidden '>
                {navBar.map((navs) => {
                  const { id, name, url } = navs;
                  return (
                    <div key={id} {...navs}>
                      <h1 className="pl-8 cursor-pointer md:hover:bg-transparent hover:bg-blue-200 hover:text-blue-500">
                        <a href={url} className="hover:translate-x-24">
                          {name}
                        </a>
                      </h1>
                    </div>
                  );
                })}
              </span>
            </nav>
          <section>
            <nav className="hidden md:flex gap-4 text-blue-500">
              <span>
                <a href="#">
                  <FaFacebook />
                </a>
              </span>
              <span>
                <a href="#">
                  <FaTwitter />
                </a>
              </span>
              <span>
                <a href="#">
                  <FaLinkedin />
                </a>
              </span>
              <span>
                <a href="#">
                  <FaBehance />
                </a>
              </span>
            </nav>
          </section>

          <div className="md:hidden">
            <button onClick={() => setShowNav(!showNav)}>
              <TiThMenu className="text-2xl text-blue-400 transition-transform hover:rotate-90 hover:text-blue-900 ease-in-out duration-300" />
            </button>
          </div>
        </article>
        {showNav && (
          <nav className=" md:hidden flex flex-col pb-0 absolute left-0 top-12 w-full md:w-auto shadow-md bg-white mt-4 md:mt-0">
            <span>
              {navBar.map((navs) => {
                const { id, name, url } = navs;
                return (
                  <div key={id} {...navs}>
                    <h1 className=" pl-8 cursor-pointer hover:bg-blue-200 hover:text-blue-500">
                      <a
                        href={url}
                        className="block transition-transform hover:translate-x-4 duration-300 ease-in-out"
                      > 
                        {name}
                      </a>
                    </h1>
                  </div>
                );
              })}
            </span>
          </nav>
        )}
      </header>
    </>
  );
}

export default App
