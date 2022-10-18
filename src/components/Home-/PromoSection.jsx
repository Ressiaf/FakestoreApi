import React from "react";
import { Link } from "react-router-dom";

export const PromoSection = () => {
return (
    <>
        <div className="relative overflow-hidden shadow-md   shadow-gray-800  rounded    ">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                <div className="sm:max-w-lg">
                <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Summer styles are finally here
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, beatae! Similique necessitatibus perferendis sint, reprehenderit, inventore natus quae itaque rerum cum repellat ad illo doloribus, architecto optio nemo at nam.
                </p>
                </div>
                <div>
                <div className="mt-10">
                    <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                    >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8 ">
                        <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img
                                src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                            </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                            </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <Link 
                        to="/products"
                        className="inline-block rounded-md border border-transparent bg-black/90 py-3 px-8 text-center font-medium text-white"
                        >
                        Shop Collection
                    </Link >
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    );
};
