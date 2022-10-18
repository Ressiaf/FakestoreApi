import React from 'react'

const ItemCarrousel = ( {product} ) => {

return (
    <>
    <div id="indicators-carousel" className="relative " data-carousel="slide" >
    <div className="overflow-hidden relative  h-screen  ">
        <div className=" duration-700ease-in-out" data-carousel-item="active">
            <img 
                src={product.images[0].src} 
                className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" 
                alt={product.images[0].alt} 
            />
        </div>

        <div className="duration-700 ease-in-out" data-carousel-item>
            <img 
                    src={product.images[1].src} 
                    className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" 
                    alt={product.images[1].alt} 
                />
        </div>

        <div className=" duration-700 ease-in-out" data-carousel-item>
            <img 
                    src={product.images[2].src} 
                    className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" 
                    alt={product.images[2].alt} 
                />
        </div>

        <div className=" duration-700 ease-in-out" data-carousel-item>
            <img 
                    src={product.images[3].src} 
                    className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 h-fit" 
                    alt={product.images[3].alt} 
                />
        </div>
    </div>


    <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none">
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-black ">
            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="hidden">Previous</span>
        </span>
    </button>
    
    <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none">
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-black ">
            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="hidden">Next</span>
        </span>
</button>

</div>
</>
    );
};

export default ItemCarrousel