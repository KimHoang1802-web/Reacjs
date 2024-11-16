import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import Carousel from './Component/Carousel'
import BaiTap1 from './BaiTap/BaiTap1'
import DataBinding from './DataBinding/DataBinding'
import Event from './Event/Event'
import RenderCondition from './RenderCondition/RenderCondition'
import DemoState from './State/DemoState'
import DemoChangFontSise from './State/DemoChangFontSise'
import ChangeColorCard from './State/ChangeColorCard'
import DemoCss from './DemoCSS/DemoCss'

function App() {
  

  return (
    <>
      <h1 className='text-blue-500'>Hello World</h1>
      {/* cách sử dụng component */}
      {/* <Header />
      <Header></Header>
      <Carousel /> */}
      {/* <BaiTap1/> */}
      {/* <DataBinding /> */}
      {/* <Event/> */}
      {/* <RenderCondition/> */}

      <DemoState/>
      <DemoChangFontSise/>
      <ChangeColorCard/>
      <DemoCss/>
    </>
  );
}

export default App;
