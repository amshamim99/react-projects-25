import React from 'react'
import Accordion from './components/Accordion'
import RandomColor from './components/random-color/RandomColor'
import RattingStar from './components/ratting-star/RattingStar'

const App = () => {
  return (
    <div>
        <Accordion/>
        <RandomColor/>
        <RattingStar/>
    </div>
    
  )
}

export default App