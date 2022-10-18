import { Popover } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline'

const HamburgerButton = () => {

    return (
    <>
        <div className=" -my-2 md:hidden ">
            <Popover.Button className="bg-black rounded-md p-2 inline-flex items-center  justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 border-gray-400 border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300">
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
        </div>
    </>
    )
}

export default HamburgerButton