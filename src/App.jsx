import React from 'react'
import Accordion from './components/Accordion'
import RandomColor from './components/random-color/RandomColor'
import RattingStar from './components/ratting-star/RattingStar'
import ImageSlider from './components/image-slider/ImageSlider'
import LoadMoreData from './components/load-more-data/LoadMoreData'
import TreeView from './components/tree-view/TreeView'
import menus from './components/tree-view/data'

const App = () => {
  return (
    <div>
      <Accordion />
      <RandomColor />
      <RattingStar />
      <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'} />
      <LoadMoreData />
      <TreeView menus={menus} />
    </div>

  )
}

export default App