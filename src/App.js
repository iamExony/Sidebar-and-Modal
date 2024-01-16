import React from 'react'
import Reviews from './Tours/Reviews'
import {data} from './data'

const App = () => {


  return (
    <>
    <Reviews reviews = {data} />
    </>
  )
}

export default App