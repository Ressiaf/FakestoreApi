import React from "react";
import ImageSlider from "../components/ItemDetail/itemCarousel/ImageSlider";
import { sliderHome } from "../components/ItemDetail/itemCarousel/SliderHome";
import { Banner } from "../components/Home-/Banner";
import { PromoSection } from "../components/Home-/PromoSection";
const Home = ( ) => {



  return (
    <>
    <div className="min-h-screen ">
      <div className="pt-10">
        <Banner />
      </div>
      <div className="pt-10">
      <div className=" overflow-hidden h-1/2  shadow-md   shadow-gray-800  rounded " >
      < ImageSlider  slides={ sliderHome} />
      </div>
      <div className=" py-20">
          <PromoSection />
      </div>
      </div>
    </div>
    </>
  )
}

  export default Home