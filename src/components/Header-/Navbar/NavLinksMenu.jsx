import { ChevronDownIcon } from "@heroicons/react/solid";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {NavLink} from "react-router-dom";



const NavLinkMenu = ({ theme, title }) => {
return (
    <>
    <Popover className="relative ">
        <>
            <Popover.Button
                className="text-gray-200 underline-offset-4 decoration-2  hover:underline uppercase p-1 px-2 lg:mx-1 inline-flex items-center text-base font-medium"
            >
            <span className="tracking-wider">{title}</span>
            <ChevronDownIcon className= "ml-2 h-5 w-5" />
            </Popover.Button>
            <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
            >
            <Popover.Panel className="absolute z-10  mt-8 transform px-2  w-screen max-w-xs sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div className="shadow  rounded-sm shadow-gray-100 ring-2 ring-black  ring-opacity-80 overflow-hidden mr-10  ">
                <div className="relative grid gap-6  px-4 py-6 sm:gap-8 sm:p-8  bg-black ">
                    {theme.map((item) => (
                        <Popover.Button
                            as={NavLink}
                            key={item.name}
                            to={item.href}
                            className="-m-3 p-2 flex items-start rounded-lg "
                        >
                        <div className="ml-4 ">
                            <p className="text-xl uppercase border-white font-medium tracking-wider text-gray-50  underline-offset-8 decoration-2  hover:underline opacity-95">
                                {item.name}
                            </p>
                        </div>
                        </Popover.Button>
                    ))}
                </div>
                </div>
            </Popover.Panel>
            </Transition>
        </>
    </Popover>
    </>
    );
};

export default NavLinkMenu;
