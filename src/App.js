
import './App.css';
import PreNavbar from './component/PreNavbar';
import Navbar from './component/Navbar.js'
import { Route, Routes } from 'react-router-dom';
import Slider from "./component/Slider.js"
import data from './data/data.json'
import Offers from './component/Offers.js'
import Heading from "./component/Heading.js"
import StarProducts from './component/StarProducts.js'
import HotAccessoryMenu from './component/HotAccessoryMenu.js'
import HotAccessories from './component/HotAccessories.js'

// const { banner } = (data).datajson;


function App() {


  return (
    <div>
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProducts StarProducts={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoryMenu />
      <Routes>
        <Route path='/music' element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
        <Route path='/smartDevices' element={<HotAccessories smartDevices={data.hotAccessories.smartDevice} smartDevicesCover={data.hotAccessoriesCover.smartDevice} />} />
        <Route path='/home' element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
        <Route path='/lifestyle' element={<HotAccessories lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle} />} />
        <Route path='/mobileAccessories' element={<HotAccessories mobile={data.hotAccessories.mobileAccessories} mobileCover={data.hotAccessoriesCover.mobileAccessories} />} />

      </Routes>
      <Heading text="PRODUCT REVIEWS" />



    </div>



  );
}

export default App;
