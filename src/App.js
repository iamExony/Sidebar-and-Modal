import React from 'react'
import Accordions from './Tours/Accordions'
import {data} from './data'

const App = () => {


  return (
    <>
    <div>
    <Accordions items = {data} />
    </div>
    </>
  )
}

export default App