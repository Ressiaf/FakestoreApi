import ItemDescription from "../components/ItemDetail/itemDesc/ItemDescription";
import ImageSlider from "../components/ItemDetail/itemCarousel/imageSlider";
import ImagePreview from "../components/ItemDetail/itemImg/ImagePreview";
import { sliderItemDetail } from "../components/ItemDetail/itemCarousel/SliderItemDetail";
import ItemReview from "../components/ItemDetail/itemDesc/ItemReview"
import SizePicker from "../components/ItemDetail/itemDesc/SizePicker";
import ItemTittle from "../components/ItemDetail/itemDesc/ItemTittle"
import Breadcrumb from "../components/ItemDetail/Breadcrumb";
import product from "../data/items/remera.json";
import React from "react";

const ItemDetail = () => {
  console.log(product.images);
  return (
    <>

      <div className=" max-w-full  h-full p-4   ">
        <div className="py-6  ">
          <Breadcrumb  product={product}/>
          <ImagePreview />
          <div className=" font-robo  mx-auto  h-fit lg:max-w-full  lg:pt-8  lg:grid lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-16">
            <div className="lg:row-span-2 mt-4 ">
            <ItemTittle product={product} />
              <p className="text-3xl text-gray-900 py-8">{product.price}$</p>
              <ItemReview product={product} />
              <form>
                <SizePicker product={product} />
                <button
                  type="submit"
                  className="mt-10 w-full bg-black/90 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
                >
                  Agregar al carrito
                </button>
              </form>
            <ItemDescription product={product} />
            </div>
              <div className=" ">
                <ImageSlider slides={sliderItemDetail} />
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
