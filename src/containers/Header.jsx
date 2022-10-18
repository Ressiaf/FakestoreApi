import React from 'react'
import SearchBar from '../components/Header-/Navbar/SearchBar'


const Header = () => {
    return (
    <>
        
        <header className="sticky top-0 h-full  font-robo md:px-2  opacity-95 bg-black  backdrop-blur-lg rounded drop-shadow-lg ">
            <div className="max-w-8xl mx-auto px-6 border-b-8 z-50 border-black tracking-wider sm-hidden">
                <div className=" hidden md:flex justify-between items-center py-3 text-white">
                    <div>
                    <h1 className=' text-4xl flex lg:hidden '>logo</h1>
                    </div>
                    <div>
                    <h1 className=' text-4xl hidden lg:flex ml-24 '>logo</h1>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </header>
    </>
    )
}



export default Header