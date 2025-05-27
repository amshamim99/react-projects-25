import React from 'react'
import Accordion from './components/Accordion'
import RandomColor from './components/random-color/RandomColor'
import RattingStar from './components/ratting-star/RattingStar'
import ImageSlider from './components/image-slider/ImageSlider'

const App = () => {
  return (
    <div>
        <Accordion/>
        <RandomColor/>
        <RattingStar/>
        <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}/>
    </div>
    
  )
}

export default App