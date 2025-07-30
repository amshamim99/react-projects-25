import React from 'react'
import Accordion from './components/Accordion'
import RandomColor from './components/random-color/RandomColor'
import RattingStar from './components/ratting-star/RattingStar'
import ImageSlider from './components/image-slider/ImageSlider'
import LoadMoreData from './components/load-more-data/LoadMoreData'
import TreeView from './components/tree-view/TreeView'
import menus from './components/tree-view/data'
import QrCodeGenerator from './components/qr-code-generator/QrCodeGenerator'
import LightDarkMode from './components/light-dark-mode/LightDarkMode'
import ScrollIndicator from './components/scroll-indicator/ScrollIndicator'
import TabTest from './components/custom-tabs/TabTest'
import ModalTest from './components/custom-modal-popup/ModalTest'
import GithubProfile from './components/github-profile-finder/GithubProfile'
import SearchAutoComplete from './components/search-autocomplete/SearchAutoComplete'
import TicTacToe from './components/tic-tac-toe/TicTacToe'
import UseFetchTestHook from './components/usefetch-hook/Test'
import UseOnclickOutsideTest from './components/use-outside-click/test'
import UseWindowResizeTest from './components/windo-resize/test';
import ScroolToTopAndBottom from './components/scroll-top-to-bottom'
import ScrollToSection from './components/scroll-to-section'

const App = () => {
  return (
    <div>
      <Accordion />
      <RandomColor />
      <RattingStar />
      <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'} />
      <LoadMoreData />
      <TreeView menus={menus} />
      <QrCodeGenerator />
      <LightDarkMode />
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />
      <TabTest/>
      <ModalTest/>
      <GithubProfile/>
      <SearchAutoComplete/>
      <TicTacToe/>
      <UseFetchTestHook/>
      <UseOnclickOutsideTest/>
      <UseWindowResizeTest/>
      <ScroolToTopAndBottom/>
      <ScrollToSection/>
    </div>

  )
}

export default App