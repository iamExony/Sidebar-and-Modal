import React, { useState } from 'react'
import {data} from './data'

const App = () => {
  const [numbers, setNumbers] = useState(1)
  const [persons, setPersons] = useState([])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setPersons(data.slice(0, numbers))
  }
    return (
      <>
        <div className="w-full flex items-center justify-center">
          <article className="max-w-2xl flex items-center flex-col my-32 mx-12">
            <h1 className="uppercase text-2xl">tired of boring lorem ipsum?</h1>
            <form onSubmit={handleSubmit}>
              <section className="flex items-center gap-4 my-8">
                <label className="text-lg">Paragraphs:</label>
                <input
                  type="number"
                  min={1}
                  max={8}
                  step={1}
                  className="bg-gray-300 text-2xl rounded-md"
                  value={numbers}
                  name="Number"
                  onChange={(e) => setNumbers(e.target.value)}
                ></input>
                <button
                  type="submit"
                  className="bg-[#10b981] px-3 p-1 rounded text-white shadow-sm hover:shadow-md"
                >
                  Generate
                </button>
              </section>
            </form>
            <ul className="flex items-center flex-col justify-center gap-12">
              {persons.map((person, index) => {
                const { id, content } = person;

                return (
                  <>
                    <div key={id}>
                      <li>{content}</li>
                    </div>
                  </>
                );
              })}
            </ul>
          </article>
        </div>
      </>
    );
  };

export default App