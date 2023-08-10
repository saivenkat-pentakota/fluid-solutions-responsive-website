import "./App.css";
import React from "react";


// importing components
import NavBar from "./components/navBar";
import Carousel from "./components/carousel";
import Cards from "./components/cards";
import DownloadApp from "./components/downloadApp";
import WorkText from "./components/worktext";
import Video from "./components/video";
import WhyChooseThis from "./components/whyChooseThis";
import ProfileSection from "./components/profileSection";
import AppScreenShot from "./components/appScreenshot";
import ContactUsForm from "./components/contactUsForm";
import Footer from './components/footer';
import Pricing from './components/pricing';

function App() {
  return (
    <div className="App">
      {/* navbar component*/}
      <NavBar />

      {/* carousel component */}
      <Carousel />

      {/* work text */}
      <WorkText />

      {/* cards component*/}
      <Cards />

      {/* downloadApp component*/}
      <DownloadApp />

      {/* video component  */}
      <Video />

      {/* whyChooseThis section */}
      <WhyChooseThis />

      {/* profile section */}
      <ProfileSection />

      {/* app screenshots section */}
      <AppScreenShot/>

      {/* pricing cards section */}
      <Pricing/>

      {/* contactusForm component */}
      <ContactUsForm/>

      {/* footer component */}
      <Footer/>
      

     

    </div>
  );
}

export default App;
