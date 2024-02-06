import React, { useEffect, useState } from "react";
import { data } from "./data";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const SlideShow = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [persons, setPersons] = useState(data);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const lastItem = persons.length - 1;
    if (slideIndex < 0) {
      setSlideIndex(lastItem);
    }
    if (slideIndex > lastItem) {
      setSlideIndex(0);
    }
  }, [persons, slideIndex]);

  useEffect(() => {
    const intervals = setInterval(() => {
      setSlideIndex(slideIndex + 1);
    }, 1000);

    if (!isPaused) {
      clearInterval(intervals);
    }
    return () => clearInterval(intervals);
  }, [slideIndex, isPaused]);
  return (
    <>
      <div className="max-w-xl mx-auto relative bg-red-400">
        {persons.map((slide, index) => {
          const { id, image, name, desig, content } = slide;

          let position;
          position = "translate-x-1/2 invisible";
          if (index === slideIndex) {
            position = "translate-x-0";
          }
          if (
            index === slideIndex - 1 ||
            (slideIndex === 0 && index === persons.length - 1)
          ) {
            position = "-translate-x-full invisible";
          }
          return (
            <>
              <div
                {...slide}
                key={id}
                className={`absolute w-full h-full  top-24 transform ${position}
        transition-transform duration-500 ease-in-out`}
                onMouseEnter={() => setIsPaused(false)}
                onMouseLeave={() => setIsPaused(true)}
              >
                <img
                  src={image}
                  alt={name}
                  className="w-52 h-52 rounded-full object-cover mx-auto mb-4 border-4 border-gray-200"
                />
                <section className="absolute  text-center flex flex-col gap-2">
                  <h1 className="text-3xl text-blue-600 ">{name}</h1>
                  <h1 className="uppercase font-semibold text-sm">{desig}</h1>
                  <p>{content}</p>
                </section>
              </div>
            </>
          );
        })}
      </div>

      <section>
        <button
          className="z-100 absolute left-12 md:left-52 top-1/2 hover:text-blue-600"
          onClick={() => setSlideIndex(slideIndex - 1)}
        >
          <FaCircleChevronLeft className="text-blue-600 hover:text-blue-900 text-2xl" />
        </button>
        <button
          className="absolute top-1/2 right-12 md:right-52 hover:text-blue-950"
          onClick={() => setSlideIndex(slideIndex + 1)}
        >
          <FaCircleChevronRight className="text-blue-600 hover:text-blue-900 text-2xl" />
        </button>
      </section>
    </>
  );
};

const App = () => {
  return (
    <>
      <article className="mx-auto my-12">
        <SlideShow />
      </article>
    </>
  );
};

export default App;
