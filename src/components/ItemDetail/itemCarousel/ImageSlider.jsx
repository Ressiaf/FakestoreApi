
import React from 'react'
import { nanoid } from "nanoid";
import { ArrowRightIcon ,ArrowLeftIcon,} from '@heroicons/react/solid'


const ImageSlider = ( { slides } ) => {

    const [current, setCurrent ] = React.useState (0)
    const length = slides.length

    const nextSlide = ( ) => {
        setCurrent(current === length -1 ? 0 : current + 1)
    };

    const prevSlide = ( ) => {
        setCurrent(current === 0 ? length - 1 : current -1)
    };

    if (!Array.isArray (slides) || slides.length <= 0 ) {
        return null
    }
    
    return (
        <>
            <div className='relative flex justify-center items-center  shadow-md shadow-gray-900 overflow-hidden  ' >
                <button
                    className='absolute top-1/2 left-10 h-16 w-16 bg-black/90 rounded p-4   z-sm select-none cursor-pointer ' 
                    onClick={prevSlide}
                >
                    <ArrowLeftIcon className=' text-white' />
                </button>
                <button
                    className='absolute top-1/2 right-10 h-16 w-16 bg-black/90 rounded p-4 z-sm select-none cursor-pointer'  
                    onClick={nextSlide}
                >
                <ArrowRightIcon className=' text-white'/>
                </button>
            {slides.map( ( slide , index ) =>{
                return (
                    <div className={index === current ? 'opacity-100 duration-500 scale-110'  : 'opacity-0 duration-500 ease-in-out'}  key={index}>
                        {index === current && (
                            <img 
                                src={slide.image} 
                                alt="slide img"
                                className='h-full w-auto object-cover'
                                key={nanoid(20)}
                            />
                        )}
                    </div>                    
                    )
            })}
            </div>
        </>
    )
}

export default ImageSlider