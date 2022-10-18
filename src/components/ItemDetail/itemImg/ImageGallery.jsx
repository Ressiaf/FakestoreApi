import React from "react";
import product from "../../../data/items/remera.json";

const ImageGallery =  () => {
  return (
    <>
      <div className="  mx-auto lg:max-w-full   lg:grid lg:grid-cols-3 z-10 shadow shadow-gray-900 mt-8 ">
        <div className="overflow-hidden lg:block">
          <img
            src={product.images[0].src}
            alt={product.images[0].alt}
            className="w-full h-full  object-center object-cover hover:scale-150 "
          />
        </div>
        <div className="hidden lg:grid lg:grid-cols-1 " >
          <div className="overflow-hidden ">
            <img
              src={product.images[1].src}
              alt={product.images[1].alt}
              className="w-full  h-full object-center object-cover hover:scale-150 "
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={product.images[2].src}
              alt={product.images[2].alt}
              className="w-full h-full object-center object-cover hover:scale-150 "
            />
          </div>
        </div>
        <div className=" sm:overflow-hidden">
          <img
            src={product.images[3].src}
            alt={product.images[3].alt}
            className="w-full h-full object-center object-cover "
          />
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
