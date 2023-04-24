
import './App.css';
import PreNavbar from './component/PreNavbar';
import Navbar from './component/Navbar.js'
import NavOptions from './component/NavOptions.js'
import { Route, Routes } from 'react-router-dom';
import Slider from "./component/Slider.js"
import data from './data/data.json'
import Offers from './component/Offers.js'
import Heading from "./component/Heading.js"
import StarProducts from './component/StarProducts.js'
import HotAccessoryMenu from './component/HotAccessoryMenu.js'
import HotAccessories from './component/HotAccessories.js'
import ProductReviews from './component/ProductReviews .js'
import Videos from './component/Videos.js'
import Banner from './component/Banner.js'
import Footer from './component/Footer.js'

// const { banner } = (data).datajson;


function App() {


  return (
    <div>
      <PreNavbar />
      <Navbar />


      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnesAndLifestyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories} />




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
      <ProductReviews productReviews={data.productReviews} />
      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner} />
      <Footer footer={data.footer} />


    </div>



  );
}

export default App;
