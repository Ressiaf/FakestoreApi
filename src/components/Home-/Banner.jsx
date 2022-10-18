import React from 'react'
import { BsMegaphone } from "react-icons/bs"
import {AiOutlineClose } from "react-icons/ai"

export const Banner = () => {
  return (
    <div className="bg-black/20 w-fill  rounded border-black border-2">
    <div className="mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex w-0 flex-1 items-center">
          <span className="flex rounded-lg bg-black p-2">
            <BsMegaphone  className="h-6 w-6 text-white" aria-hidden="true" />
          </span>
          <p className="ml-3 truncate font-bold text-xl text-black">
            <span className="md:hidden">We announced a new product!</span>
            <span className="hidden md:inline">Big news! We're excited to announce a brand new product.</span>
          </p>
        </div>
        <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
          <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm  text-white/90 font-bold shadow-sm "
          >
            Learn more
          </a>
        </div>
        <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
          <button
            type="button"
            className="-mr-1 flex rounded p-2 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2      bg-black"
          >
            <AiOutlineClose className="h-5 w-5 text-white/80 " aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
