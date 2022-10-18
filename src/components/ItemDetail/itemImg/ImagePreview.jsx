import React from 'react'
import product from "../../../data/items/remera.json";

const ImagePreview = ( ) => {
    return (
        <>
            <div className="mb-20 mt-8 ">
            <div className="  mx-auto grid grid-cols-3  overflow-hidden h-full  lg:my-4 shadow-md   shadow-gray-800 ">
                <div className=" block">
                    <img
                        src={product.images[0].src}
                        alt={product.images[0].alt}
                        className=" h-80 w-full object-center object-cover "
                    />
                </div>
                
                <div className="overflow-hidden lg:block">
                    <img
                        src={product.images[1].src}
                        alt={product.images[1].alt}
                        className=" h-80  w-full object-center object-cover "
                    />
                </div>
                <div className="overflow-hidden lg:block">
                    <img
                        src={product.images[2].src}
                        alt={product.images[2].alt}
                        className="  h-80 w-full object-center object-cover "
                    />
                </div>
            </div>
            </div>
    </>
        
    );
};

export default ImagePreview